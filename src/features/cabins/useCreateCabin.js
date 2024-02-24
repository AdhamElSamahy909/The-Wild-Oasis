import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createEditCabin,
  deleteCabin as deleteCabinApi,
} from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      // This restet fn is coming from the useForm hook so, we cannot have it here. However, we can still call
      // it on success
      // reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
