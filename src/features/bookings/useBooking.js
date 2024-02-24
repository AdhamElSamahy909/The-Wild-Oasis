import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export default function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    // If we use useQuery again on another page with this exact key, the data'd be read from the cache
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    // By default, react query will try to fetch the data 3 times in case that it fails in the beginning
    retry: false,
  });

  return { isLoading, booking, error };
}
