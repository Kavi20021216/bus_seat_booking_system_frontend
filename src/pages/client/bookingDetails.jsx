// src/pages/BookingDetails.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BookingDetails() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [bus, setBus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookingAndBus = async () => {
      try {
        // 1️⃣ Fetch booking info by bookingId
        const bookingRes = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/bookings/${bookingId}`
        );
        const bookingData = bookingRes.data;
        setBooking(bookingData);

        // 2️⃣ Fetch bus info using busId from booking
        const busRes = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/buses/${bookingData.busId}`
        );
        setBus(busRes.data);
      } catch (err) {
        console.error("Error fetching booking or bus:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingAndBus();
  }, [bookingId]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!booking) return <p className="text-center mt-10 text-red-500">Booking not found</p>;

  return (
    <div className="min-h-screen flex justify-center items-start p-10 bg-gray-50">
      <div className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Booking <span className="text-red-500">Details</span>
        </h1>

        {/* Booking Info */}
        <div className="mb-6">
          <p><strong>Booking ID:</strong> {booking.bookingId}</p>
          <p><strong>Passenger Name:</strong> {booking.passengerName}</p>
          <p><strong>Phone:</strong> {booking.phone}</p>
          {booking.email && <p><strong>Email:</strong> {booking.email}</p>}
        </div>

        {/* Bus Info */}
        {bus ? (
          <div className="mb-6 p-6 bg-gray-100 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Bus Info</h2>
            <p><strong>Bus Name:</strong> {bus.busName}</p>
            <p><strong>From:</strong> {bus.route.from}</p>
            <p><strong>To:</strong> {bus.route.to}</p>
            <p><strong>Time:</strong> {bus.time.from} - {bus.time.to}</p>
            <p><strong>Category:</strong> <span className="text-red-500">{bus.category}</span></p>
          </div>
        ) : (
          <p className="text-red-500">Bus details not found</p>
        )}

        {/* Seats & Total Price */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Selected Seats</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {booking.seats.map((seat) => (
              <span key={seat} className="px-3 py-1 bg-red-500 text-white rounded">
                {seat}
              </span>
            ))}
          </div>
          <p className="font-semibold">Total Price: Rs. {booking.totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
