// // import { useLocation, useParams } from "react-router-dom";

// // export default function Checkout() {
// //   const { busId } = useParams();
// //   const location = useLocation();
// //   const selectedSeats = location.state?.seats || [];

// //   const pricePerSeat = 1600; // mock price
// //   const totalPrice = selectedSeats.length * pricePerSeat;

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-10">

// //       {/* PAGE TITLE */}
// //       <h1 className="text-3xl font-bold text-center mb-10">
// //         Passenger <span className="text-red-600">Information</span>
// //       </h1>

// //       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

// //         {/* LEFT SECTION */}
// //         <div className="md:col-span-2 bg-white p-8 rounded-xl shadow">

// //           {/* Passenger Info */}
// //           <div className="space-y-5">
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Full Name</label>
// //               <input type="text" className="w-full border rounded-lg p-3" placeholder="Ram" />
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium mb-1">Email Address</label>
// //               <input type="email" className="w-full border rounded-lg p-3" placeholder="ram@gmail.com" />
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium mb-1">Phone</label>
// //               <input type="text" className="w-full border rounded-lg p-3" />
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium mb-1">Alternative Phone</label>
// //               <input type="text" className="w-full border rounded-lg p-3" />
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium mb-1">Pickup Station</label>
// //               <select className="w-full border rounded-lg p-3">
// //                 <option>Swoyambhu</option>
// //                 <option>Koteshwor</option>
// //                 <option>Kalanki</option>
// //               </select>
// //             </div>
// //           </div>

// //           {/* Payment Method */}
// //           <div className="mt-10">
// //             <h2 className="font-semibold mb-4">Select Payment Method</h2>

// //             <div className="flex gap-4">
// //               <div className="border rounded-xl p-4 flex items-center gap-3 w-64 cursor-pointer ring-2 ring-red-500">
// //                 <input type="radio" checked readOnly />
// //                 <div>
// //                   <p className="font-medium">Ram Bdr. Ghale</p>
// //                   <p className="text-sm text-gray-500">**** 8888</p>
// //                 </div>
// //               </div>

// //               <div className="border rounded-xl p-4 flex items-center gap-3 w-64 cursor-pointer">
// //                 <input type="radio" />
// //                 <div>
// //                   <p className="font-medium">Ram Bdr. Ghale</p>
// //                   <p className="text-sm text-gray-500">**** 9898</p>
// //                 </div>
// //               </div>
// //             </div>

// //             <p className="text-red-600 mt-3 cursor-pointer">+ Add New Card</p>
// //           </div>
// //         </div>

// //         {/* RIGHT SECTION */}
// //         <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-4">

// //           <h2 className="text-xl font-bold">Your Ticket Report Status</h2>

// //           <div className="text-sm text-gray-600">
// //             <p><strong>Bus ID:</strong> {busId}</p>
// //           </div>

// //           <hr />

// //           <div>
// //             <h3 className="font-semibold mb-2">Your Seats</h3>
// //             <div className="flex gap-2 flex-wrap">
// //               {selectedSeats.map(seat => (
// //                 <span key={seat} className="px-3 py-1 bg-gray-200 rounded">
// //                   {seat}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>

// //           <hr />

// //           <div className="flex justify-between font-semibold">
// //             <span>Total Price</span>
// //             <span>NPR {totalPrice}</span>
// //           </div>

// //           <button className="mt-5 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
// //             PROCESSED TO PAY →
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import { useLocation, useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// export default function Checkout() {
//     const { busId } = useParams();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const selectedSeats = location.state?.selectedSeats || [];

//     const pricePerSeat = 1600; // mock price
//     const totalPrice = selectedSeats.length * pricePerSeat;

//     const [buses, setBuses] = useState([]);
//     const [passengerName, setPassengerName] = useState("");
//     const [email, setEmail] = useState(""); // optional: if user login provides email
//     const [phone, setPhone] = useState("");
//     const [altPhone, setAltPhone] = useState("");
//     const [pickupStation, setPickupStation] = useState("Swoyambhu");
//     const [selectedCard, setSelectedCard] = useState("");

//     const paymentMethods = [
//         { id: "visa", name: "Visa", number: "**** 8888", image: "/creditcard.png" },
//         { id: "mastercard", name: "Mastercard", number: "**** 9898", image: "/mastercard.png" },
//     ];

//     const handleBooking = async () => {
//         if (!passengerName || !phone || !selectedCard) {
//             alert("Please fill passenger details and select a payment method");
//             return;
//         }

//         try {
//             // Loop through all selected seats and book each one
//             const bookingPromises = selectedSeats.map((seatNumber) =>
//                 axios.post("/api/bookings", {
//                     busId,
//                     seatNumber,
//                     passengerName,
//                     phone,
//                 })
//             );

//             const responses = await Promise.all(bookingPromises);
//             console.log("Booking responses:", responses);

//             alert("Seats booked successfully!");
//             navigate("/booking-success"); // redirect to success page
//         } catch (error) {
//             console.error("Booking error:", error.response?.data || error.message);
//             alert(error.response?.data?.message || "Failed to book seat");
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-10">
//             {/* PAGE TITLE */}
//             <h1 className="text-3xl font-bold text-center mb-10">
//                 Passenger <span className="text-red-600">Information</span>
//             </h1>

//             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//                 {/* LEFT SECTION */}
//                 <div className="md:col-span-2 bg-white p-8 rounded-xl shadow">
//                     {/* Passenger Info */}
//                     <div className="space-y-5">
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Full Name</label>
//                             <input
//                                 type="text"
//                                 className="w-full border rounded-lg p-3"
//                                 placeholder="Ram"
//                                 value={passengerName}
//                                 onChange={(e) => setPassengerName(e.target.value)}
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium mb-1">Email Address</label>
//                             <input
//                                 type="email"
//                                 className="w-full border rounded-lg p-3"
//                                 placeholder="ram@gmail.com"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium mb-1">Phone</label>
//                             <input
//                                 type="text"
//                                 className="w-full border rounded-lg p-3"
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium mb-1">Alternative Phone</label>
//                             <input
//                                 type="text"
//                                 className="w-full border rounded-lg p-3"
//                                 value={altPhone}
//                                 onChange={(e) => setAltPhone(e.target.value)}
//                             />
//                         </div>

//                         {/* <div>
//               <label className="block text-sm font-medium mb-1">Pickup Station</label>
//               <select
//                 className="w-full border rounded-lg p-3"
//                 value={pickupStation}
//                 onChange={(e) => setPickupStation(e.target.value)}
//               >
//                 <option></option>
//                 <option>Koteshwor</option>
//                 <option>Kalanki</option>
//               </select>
//             </div> */}
//                     </div>

//                     {/* Payment Method */}
//                     <div className="mt-10">
//                         <h2 className="font-semibold mb-4">Select Payment Method</h2>
//                         <div className="flex gap-4">
//                             {paymentMethods.map((card) => (
//                                 <label
//                                     key={card.id}
//                                     className={`border rounded-xl p-4 flex items-center gap-3 w-64 cursor-pointer transition ${selectedCard === card.id ? "ring-2 ring-red-500" : ""
//                                         }`}
//                                 >
//                                     <input
//                                         type="radio"
//                                         name="payment"
//                                         className="hidden"
//                                         checked={selectedCard === card.id}
//                                         onChange={() => setSelectedCard(card.id)}
//                                     />
//                                     <img src={card.image} alt={card.name} className="w-12 h-8 object-contain" />
//                                     <div>
//                                         <p className="font-medium">{card.name}</p>
//                                         <p className="text-sm text-gray-500">{card.number}</p>
//                                     </div>
//                                 </label>
//                             ))}
//                         </div>

//                         <p className="text-red-600 mt-3 cursor-pointer">+ Add New Card</p>
//                     </div>
//                 </div>

//                 {/* RIGHT SECTION */}
//                 <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-4">
//                     <h2 className="text-xl font-bold">Your Ticket Report Status</h2>

//                     {/* <div className="text-sm text-gray-600">
//             <p><strong>Bus ID:</strong> {busId}</p>
//           </div> */}
//                     <h2 className="text-2xl font-bold text-black">Your Destination</h2>

//                     <p><strong>Bus Name:</strong> {bus.busName}</p>
//                     <p><strong>From:</strong> {bus.route.from}</p>
//                     <p><strong>To:</strong> {bus.route.to}</p>
//                     <p><strong>Time:</strong> {bus.time.from} - {bus.time.to}</p>
//                     <p>
//                         <strong>Category:</strong>{" "}
//                         <span className="text-red-500">{bus.category}</span>
//                     </p>
//                     <hr />

//                     <div>
//                         <h3 className="font-semibold mb-2">Your Seats</h3>
//                         <div className="flex gap-2 flex-wrap">
//                             {selectedSeats.map((seat) => (
//                                 <span key={seat} className="px-3 py-1 bg-gray-200 rounded">
//                                     {seat}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>

//                     <hr />

//                     <div className="flex justify-between font-semibold">
//                         <span>Total Price</span>
//                         <span>NPR {totalPrice}</span>
//                     </div>

//                     <button
//                         className="mt-5 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
//                         onClick={handleBooking}
//                     >
//                         PROCEED TO PAY →
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }


import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Checkout() {
    const { busId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Seats passed from previous page
    const selectedSeats = location.state?.selectedSeats || [];

    // Pricing
    const pricePerSeat = 1600;
    const totalPrice = selectedSeats.length * pricePerSeat;

    // Bus state
    const [bus, setBus] = useState(null);
    const [loading, setLoading] = useState(true);

    // Passenger info
    const [passengerName, setPassengerName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [altPhone, setAltPhone] = useState("");

    // Payment
    const [selectedCard, setSelectedCard] = useState("");

    const paymentMethods = [
        { id: "visa", name: "Visa", number: "**** 8888", image: "/creditcard.png" },
        { id: "mastercard", name: "Mastercard", number: "**** 9898", image: "/mastercard.png" },
    ];

    // 🔹 Fetch bus by ID
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


    // 🔹 Book seats
    // const handleBooking = async () => {
    //     if (!passengerName || !phone || !selectedCard) {
    //         alert("Please fill passenger details and select payment method");
    //         return;
    //     }

    //     try {
    //         const bookingRequests = selectedSeats.map((seatNumber) =>
    //             axios.post(
    //                 `${import.meta.env.VITE_BACKEND_URL}/api/bookings/create`,
    //                 {
    //                     busId,
    //                     seatNumber,
    //                     passengerName,
    //                     phone,
    //                     email,
    //                 }
    //             )
    //         );
    //         await Promise.all(bookingRequests);

    //         alert("Seats booked successfully!");
    //         navigate("/booking-success");
    //     } catch (error) {
    //         console.error("Booking failed", error);
    //         alert("Seat booking failed");
    //     }
    // };


    const handleBooking = async () => {
        if (!passengerName || !phone || !selectedCard) {
            alert("Fill all required fields");
            return;
        }

        try {
            
            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/bookings/create`,
                {
                    busId,
                    seats: selectedSeats,
                    passengerName,
                    phone,
                    email,
                    totalPrice,
                }
            );

            alert("Booking successful!");
            navigate("/booking-success");
        } catch (error) {
            alert(error.response?.data?.message || "Booking failed");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-10">
            {/* TITLE */}
            <h1 className="text-3xl font-bold text-center mb-10">
                Passenger <span className="text-red-600">Information</span>
            </h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* ================= LEFT SECTION ================= */}
                <div className="md:col-span-2 bg-white p-8 rounded-xl shadow">
                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg p-3"
                                value={passengerName}
                                onChange={(e) => setPassengerName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full border rounded-lg p-3"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Phone</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg p-3"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Alternative Phone</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg p-3"
                                value={altPhone}
                                onChange={(e) => setAltPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* PAYMENT */}
                    <div className="mt-10">
                        <h2 className="font-semibold mb-4">Select Payment Method</h2>
                        <div className="flex gap-4">
                            {paymentMethods.map((card) => (
                                <label
                                    key={card.id}
                                    className={`border rounded-xl p-4 flex items-center gap-3 w-64 cursor-pointer
                  ${selectedCard === card.id ? "ring-2 ring-red-500" : ""}`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        hidden
                                        checked={selectedCard === card.id}
                                        onChange={() => setSelectedCard(card.id)}
                                    />
                                    <img src={card.image} alt={card.name} className="w-12 h-8" />
                                    <div>
                                        <p className="font-medium">{card.name}</p>
                                        <p className="text-sm text-gray-500">{card.number}</p>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT SECTION ================= */}
                <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Your Ticket Report</h2>

                    {loading ? (
                        <p>Loading bus details...</p>
                    ) : bus ? (
                        <>
                            <h3 className="text-lg font-semibold">Bus Details</h3>

                            <p><strong>Bus Name:</strong> {bus.busName}</p>
                            <p><strong>From:</strong> {bus.route.from}</p>
                            <p><strong>To:</strong> {bus.route.to}</p>
                            <p><strong>Time:</strong> {bus.time.from} - {bus.time.to}</p>
                            <p>
                                <strong>Category:</strong>{" "}
                                <span className="text-red-500">{bus.category}</span>
                            </p>

                            <hr />

                            <div>
                                <h3 className="font-semibold mb-2">Selected Seats</h3>
                                <div className="flex gap-2 flex-wrap">
                                    {selectedSeats.map((seat) => (
                                        <span key={seat} className="px-3 py-1 bg-gray-200 rounded">
                                            {seat}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <hr />

                            <div className="flex justify-between font-semibold">
                                <span>Total Price</span>
                                <span>Rs. {totalPrice}</span>
                            </div>

                            <button
                                onClick={handleBooking}
                                className="mt-5 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
                            >
                                PROCEED TO PAY →
                            </button>
                        </>
                    ) : (
                        <p className="text-red-500">Bus not found</p>
                    )}
                </div>
            </div>
        </div>
    );
}
