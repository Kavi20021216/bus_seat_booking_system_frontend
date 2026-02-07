import { useNavigate } from "react-router-dom";

export default function BusCard({ bus }) {
  const navigate = useNavigate();

  return (
    <div className="w-75 h-62.5 flex flex-col shrink-0 shadow-lg rounded-2xl overflow-hidden bg-white p-4">
      
      {/* Bus Name */}
      <h1 className="text-black font-bold text-lg">{bus.busName}</h1>

      {/* Route */}
      <div className="flex justify-between text-gray-500 text-sm mt-2">
        <span>From: {bus.route.from}</span>
        <span>To: {bus.route.to}</span>
      </div>

      {/* Time */}
      <div className="flex justify-between text-gray-500 text-sm mt-1">
        <span>Time From: {bus.time.from}</span>
        <span>To: {bus.time.to}</span>
      </div>
      
      {/* date */}
      <p className="text-gray-500 text-sm mt-2">Date: {bus.date}</p>

      {/* Category */}
      <p className="text-gray-500 text-sm mt-2">Category: {bus.category}</p>

      {/* Price */}
      <p className="text-black font-semibold text-md mt-1">
        Price per seat: Rs.{bus.pricePerSeat}
      </p>

      {/* Reserve Button */}
      <button
        onClick={() => navigate(`/busDetails/${bus.busId}`)}
        className="mt-auto bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
      >
        Reserve Seat
      </button>
    </div>
  );
}
