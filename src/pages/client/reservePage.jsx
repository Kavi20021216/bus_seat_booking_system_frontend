import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Loader from "../../components/loader";
import BusCard from "../../components/busCard";

export default function ReservePage() {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  // Fetch all buses on page load
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/buses")
      .then((res) => {
        setBuses(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch buses");
        setLoading(false);
      });
  }, []);

  // Search function
  const searchBuses = async () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/buses/search`,
      { params: { from, to, date } } // send as query params
    );

      if (res.data.length === 0) {
        setError("Not Found");
      }
      setBuses(res.data);
    } catch (err) {
      console.error(err);
      setError("Not Found");
      setBuses([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen p-6">
      {/* ===== TITLE ===== */}
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="text-black">Reserve </span>
        <span className="text-red-600">Seats</span>
      </h2>

      {/* ===== SEARCH SECTION ===== */}
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md mb-10 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-2"
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-2"
        />
        <button
          onClick={searchBuses}
          className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 transition"
        >
          <FaSearch /> Search
        </button>
      </div>

      {/* ===== BUS CARDS ===== */}
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-center text-red-600 font-semibold">{error}</p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {buses.map((bus) => (
            <BusCard key={bus.busId} bus={bus} />
          ))}
        </div>
      )}
    </div>
  );
}
