import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AdminBusAdd() {
  const navigate = useNavigate();

  const [busId, setBusId] = useState("");
  const [busName, setBusName] = useState("");
  const [category, setCategory] = useState("");
  const [pricePerSeat, setPricePerSeat] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [seatCount, setSeatCount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }

    const seats = [];
    for (let i = 1; i <= seatCount; i++) {
      seats.push({ number: i, status: "available" });
    }

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/buses/add`,
        {
          busId,
          busName,
          category,
          pricePerSeat,
          route: { from, to },
          date,
          time: { from: timeFrom, to: timeTo },
          seats,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        toast.success("Bus added successfully");
        navigate("/admin");
      })
      .catch(() => {
        toast.error("Failed to add bus");
      });
  }

  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl p-6 border rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Add New Bus
        </h2>

        {/* ✅ TWO COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Bus ID"
            value={busId}
            onChange={(e) => setBusId(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Bus Name"
            value={busName}
            onChange={(e) => setBusName(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded"
            required
          >
            <option value="">Select Bus Category</option>
            <option value="private">Private</option>
            <option value="luxury">Luxury</option>
            <option value="semi-luxury">Semi-Luxury</option>
            <option value="government">Government</option>
          </select>

          <input
            type="number"
            placeholder="Price Per Seat"
            value={pricePerSeat}
            onChange={(e) => setPricePerSeat(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Route From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Route To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="time"
            value={timeFrom}
            onChange={(e) => setTimeFrom(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="time"
            value={timeTo}
            onChange={(e) => setTimeTo(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="number"
            placeholder="Total Seats"
            value={seatCount}
            onChange={(e) => setSeatCount(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </div>

        {/* ✅ BUTTONS */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={() => navigate("/admin/buses")}
            className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>

          <button
          
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Add Bus
          </button>
        </div>
      </form>
    </div>
  );
}
