import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true }); // Will invalidate all the queries that are currently active on the page. This is easies bec we will not have to remember any query keys
    },

    onError: () => toast.error("There was an error while checking out"),
  });

  return { checkout, isCheckingOut };
}

// export function useCheckin() {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();

//   const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
//     mutationFn: ({ bookingId, breakfast }) =>
//       updateBooking(bookingId, {
//         status: "checked-in",
//         isPaid: true,
//         ...breakfast,
//       }),

//     onSuccess: (data) => {
//       toast.success(`Booking #${data.id} successfully checked in`);
//       queryClient.invalidateQueries({ active: true });
//       navigate("/");
//     },

//     onError: () => toast.error("There was an error while checking in"),
//   });

//   return { checkin, isCheckingIn };
// }
