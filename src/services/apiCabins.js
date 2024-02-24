import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

// We need to pass the id of the cabin that is being edited
export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);
  // This image might not be a string. So, we might not be able to call this fn
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // https://isnsqyhtpwuevepqhrne.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  // 1) Create/edit Cabin
  let query = supabase.from("cabins");

  // A) Create
  if (!id)
    // By default, this insert fn will not immediately return a the new row. Many times we actually do need
    // that and we do return the data actually from this fn. Right now, this data will be empty
    query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) Edit
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2) Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    // We have to specify the name of the file and the file itself
    .upload(imageName, newCabin.image);

  // 3) Delete the cabin if there's an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin could not be created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return null;
}
