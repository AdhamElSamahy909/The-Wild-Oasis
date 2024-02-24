import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useDeletecabin() {
  // A hook that will get us an instance of our queryClient
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted!");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    // the onError gets access to the error that we throw in our fn
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
