import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function AdminBusUpdate() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [busId] = useState(state.busId);

  const [busName, setBusName] = useState(state.busName);
  const [category, setCategory] = useState(state.category);
  const [pricePerSeat, setPricePerSeat] = useState(state.pricePerSeat);
  const [from, setFrom] = useState(state.route.from);
  const [to, setTo] = useState(state.route.to);
  const [date, setDate] = useState(state.date);
  const [timeFrom, setTimeFrom] = useState(state.time.from);
  const [timeTo, setTimeTo] = useState(state.time.to);

  function handleSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/buses/${busId}`,
        {
          busName,
          category,
          pricePerSeat,
          route: { from, to },
          date,
          time: { from: timeFrom, to: timeTo },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        toast.success("Bus updated successfully");
        navigate("/admin");
      })
      .catch(() => {
        toast.error("Failed to update bus");
      });
  }

  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl p-6 border rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Bus
        </h2>

        {/* ✅ TWO COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Bus ID (disabled) */}
          <input
            type="text"
            value={busId}
            disabled
            className="border p-2 rounded bg-gray-100 cursor-not-allowed"
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
            Update Bus
          </button>
        </div>
      </form>
    </div>
  );
}
