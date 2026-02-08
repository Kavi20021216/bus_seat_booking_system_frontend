import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
import Loader from "../../components/loader";
import { useNavigate } from "react-router-dom";

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/api/bookings/all`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setBookings(res.data);
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to load bookings");
        })
        .finally(() => setIsLoading(false));
    }
  }, [isLoading]);

  return (
    <div className="w-full h-full p-4">
      <h1 className="text-2xl font-bold mb-4">Bookings (Admin)</h1>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-auto">
          <table className="w-full border-[3px]">
            <thead>
              <tr className="bg-[#ff9999]">
                <th className="p-2 border">Booking ID</th>
                <th className="p-2 border">Bus ID</th>
                <th className="p-2 border">Passenger</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Seats</th>
                <th className="p-2 border">Total Price</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td className="p-2 border">{booking.bookingId}</td>
                  <td className="p-2 border">{booking.busId}</td>
                  <td className="p-2 border">{booking.passengerName}</td>
                  <td className="p-2 border">{booking.phone}</td>
                  <td className="p-2 border">
                    {booking.seats.join(", ")}
                  </td>
                  <td className="p-2 border">
                    Rs. {booking.totalPrice}
                  </td>

                  <td className="p-2 border flex justify-center">
                    <BiTrash
                      className="bg-red-500 p-2 text-3xl rounded-full text-white cursor-pointer"
                      onClick={() => {
                        const token = localStorage.getItem("token");

                        if (!window.confirm("Cancel this booking?")) return;

                        axios
                          .delete(
                            `${import.meta.env.VITE_BACKEND_URL}/api/bookings/cancel/${booking.bookingId}`,
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          )
                          .then(() => {
                            toast.success("Booking cancelled");
                            setIsLoading(true);
                          })
                          .catch(() => {
                            toast.error("Failed to cancel booking");
                          });
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
