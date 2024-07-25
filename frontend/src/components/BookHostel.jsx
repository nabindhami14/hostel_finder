import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { bookHostel } from "../api";
import { useNavigate } from "react-router-dom";

const BookHostel = ({ hostelId }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: bookHostel,
    onSuccess: () => {
      toast.success("Successfully booked");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      navigate("/bookings");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.error || "ERROR WHILE BOOKING HOSTEL", {
        position: "bottom-right",
      });
      console.log("error while log in", err);
    },
  });

  const handleClick = async () => {
    mutate({ hostelId });
  };
  return (
    <button
      disabled={isPending}
      onClick={handleClick}
      className="w-full h-10 border my-4 bg-blue-400 text-white opacity-90 hover:opacity-100"
    >
      Book
    </button>
  );
};

export default BookHostel;
