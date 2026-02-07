// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Loader from "../../components/loader";

// export default function BusDetails() {
//   const { busId } = useParams();
//   const navigate = useNavigate();

//   const [bus, setBus] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   useEffect(() => {
//     const fetchBus = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/buses/${busId}`);
//         setBus(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBus();
//   }, [busId]);

//   const toggleSeat = (seatNumber) => {
//     const seat = bus.seats.find((s) => s.number === seatNumber);
//     if (seat.status === "booked") return;

//     if (selectedSeats.includes(seatNumber)) {
//       setSelectedSeats(selectedSeats.filter((s) => s !== seatNumber));
//     } else {
//       setSelectedSeats([...selectedSeats, seatNumber]);
//     }
//   };

//   const proceedCheckout = () => {
//     if (selectedSeats.length === 0) {
//       alert("Select at least one seat");
//       return;
//     }
//     navigate(`/checkout/${busId}`, { state: { seats: selectedSeats } }); // example redirect to checkout page
//   };

//   if (loading) return <Loader />;
//   if (!bus) return <p className="text-center mt-10">Bus not found</p>;

//   return (
//     <div className="p-10 flex flex-col  md:flex-row gap-10">
//       {/* Left: Seat layout */}
//       <div className="w-full md:w-2/3">
//         <div >
//         <h1 className="text-3xl font-bold mb-5 text-center">
//           <span className="text-black">Bus </span>
//           <span className="text-red-500">Details</span>
//         </h1>
//        </div> 
//         <div className="grid grid-cols-6 gap-3">
//           {bus.seats.map((seat) => (
//             <div
//               key={seat.number}
//               onClick={() => toggleSeat(seat.number)}
//               className={`w-12 h-12 flex justify-center items-center rounded cursor-pointer border
//                 ${
//                   seat.status === "booked"
//                     ? "bg-red-500 cursor-not-allowed"
//                     : selectedSeats.includes(seat.number)
//                     ? "bg-yellow-400"
//                     : "bg-green-400 hover:bg-green-500"
//                 }`}
//             >
//               {seat.number}
//             </div>
//           ))}
//         </div>
//         <div className="mt-3 text-sm text-gray-500 flex gap-4">
//           <span className="bg-green-400 px-2 py-1 rounded">Available</span>
//           <span className="bg-red-500 px-2 py-1 rounded">Booked</span>
//           <span className="bg-yellow-400 px-2 py-1 rounded">Selected</span>
//         </div>
//       </div>

//       {/* Right: Bus info + selected seats */}
//       <div className="w-full md:w-1/3 p-5 bg-gray-100 rounded-xl shadow-md flex flex-col gap-4">
//         <h2 className="text-2xl font-bold text-black">Your Destination</h2>
//         <p><strong>From:</strong> {bus.route.from}</p>
//         <p><strong>To:</strong> {bus.route.to}</p>
//         <p><strong>Time:</strong> {bus.time.from} - {bus.time.to}</p>
//         <p><strong>Category:</strong> <span className="text-red-500">{bus.category}</span></p>

//         <hr className="my-2" />

//         <h2 className="text-xl font-semibold">Selected Seats</h2>
//         <div className="flex flex-wrap gap-2">
//           {selectedSeats.length === 0 && <p>No seats selected</p>}
//           {selectedSeats.map((seat) => (
//             <div key={seat} className="w-10 h-10 bg-red-500 text-white flex justify-center items-center rounded">
//               {seat}
//             </div>
//           ))}
//         </div>

//         {selectedSeats.length > 0 && (
//           <p className="mt-2 font-semibold">
//             Total Price: ${selectedSeats.length * bus.pricePerSeat}
//           </p>
//         )}

//         <button
//           onClick={proceedCheckout}
//           className="mt-auto bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
//         >
//           Proceed Checkout
//         </button>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/loader";

export default function BusDetails() {
  const { busId } = useParams();
  const navigate = useNavigate();

  const [bus, setBus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const fetchBus = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/buses/${busId}`
        );
        setBus(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBus();
  }, [busId]);

  const toggleSeat = (seatNumber) => {
    const seat = bus.seats.find((s) => s.number === seatNumber);
    if (seat.status === "booked") return;

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const proceedCheckout = () => {
    if (selectedSeats.length === 0) {
      alert("Select at least one seat");
      return;
    }
    navigate(`/checkout/${busId}`, { state: { seats: selectedSeats } });
  };

  if (loading) return <Loader />;
  if (!bus) return <p className="text-center mt-10">Bus not found</p>;

  return (
    <div className="p-10">

      {/* ================= CHANGE #1: PAGE TITLE MOVED TO TOP ================= */}
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="text-black">Bus </span>
        <span className="text-red-500">Details</span>
      </h1>

      {/* ================= CHANGE #2: TWO-SECTION LAYOUT ================= */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* ================= LEFT SECTION: SEAT LAYOUT ================= */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-6 gap-3">
            {bus.seats.map((seat) => (
              <div
                key={seat.number}
                onClick={() => toggleSeat(seat.number)}
                className={`w-12 h-12 flex justify-center items-center rounded cursor-pointer border
                  ${seat.status === "booked"
                    ? "bg-red-500 cursor-not-allowed"
                    : selectedSeats.includes(seat.number)
                      ? "bg-yellow-400"
                      : "bg-green-400 hover:bg-green-500"
                  }`}
              >
                {seat.number}
              </div>
            ))}
          </div>

          {/* LEGEND */}
          <div className="mt-4 flex gap-4 text-sm">
            <span className="bg-green-400 px-3 py-1 rounded">Available</span>
            <span className="bg-red-500 px-3 py-1 rounded text-white">Booked</span>
            <span className="bg-yellow-400 px-3 py-1 rounded">Selected</span>
          </div>
        </div>

        {/* ================= RIGHT SECTION: BUS DETAILS ================= */}
        <div className="w-full md:w-1/3 p-6 bg-gray-100 rounded-xl shadow-md flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-black">Your Destination</h2>

          <p><strong>Bus Name:</strong> {bus.busName}</p>
          <p><strong>From:</strong> {bus.route.from}</p>
          <p><strong>To:</strong> {bus.route.to}</p>
          <p><strong>Time:</strong> {bus.time.from} - {bus.time.to}</p>
          <p>
            <strong>Category:</strong>{" "}
            <span className="text-red-500">{bus.category}</span>
          </p>

          <hr />

          {/* SELECTED SEATS */}
          <h3 className="text-lg font-semibold">Selected Seats</h3>
          <div className="flex flex-wrap gap-2">
            {selectedSeats.length === 0 && <p>No seats selected</p>}
            {selectedSeats.map((seat) => (
              <div
                key={seat}
                className="w-10 h-10 bg-red-500 text-white flex justify-center items-center rounded"
              >
                {seat}
              </div>
            ))}
          </div>

          {/* PRICE */}
          {selectedSeats.length > 0 && (
            <p className="font-semibold">
              Total Price: ${selectedSeats.length * bus.pricePerSeat}
            </p>
          )}

          {/* CHECKOUT BUTTON */}
          <button
            onClick={() =>
              navigate(`/checkout/${bus.busId}`, {
                state: {
                  selectedSeats,
                  bus,
                },
              })
            }
            className="mt-auto bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
          >
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
