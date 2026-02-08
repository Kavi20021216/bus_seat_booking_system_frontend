import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../../components/loader";
import { CSVLink } from "react-csv";

export default function DailyBookingReport() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login");
      return;
    }

    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/bookings/daily-report/${today}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setBookings(res.data))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load daily report");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daily Booking Report</h1>

      {isLoading ? (
        <Loader />
      ) : bookings.length === 0 ? (
        <p>No bookings today</p>
      ) : (
        <>
          <div className="overflow-auto">
            <table className="w-full border-2">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border">Booking ID</th>
                  <th className="p-2 border">Bus / Route</th>
                  <th className="p-2 border">Passenger</th>
                  <th className="p-2 border">Phone</th>
                  <th className="p-2 border">Seats</th>
                  <th className="p-2 border">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => (
                  <tr key={i}>
                    <td className="p-2 border">{b.bookingId}</td>
                    <td className="p-2 border">{b.busId}</td>
                    <td className="p-2 border">{b.passengerName}</td>
                    <td className="p-2 border">{b.phone}</td>
                    <td className="p-2 border">{b.seats.join(", ")}</td>
                    <td className="p-2 border">Rs. {b.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CSVLink
            data={bookings}
            filename={`booking-report-${new Date().toISOString().slice(0, 10)}.csv`}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mt-4 inline-block"
          >
            Download CSV
          </CSVLink>
        </>
      )}
    </div>
  );
}
