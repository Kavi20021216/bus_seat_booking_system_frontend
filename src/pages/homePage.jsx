// import { useNavigate } from "react-router-dom";


// export default function HomePage() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div
//         className="w-full bg-cover bg-center"
//         style={{ backgroundImage: "url('/bg1.webp')" }}
//       >
//         {/* Black transparent overlay */}
//         <div
//           className="
//           min-h-screen
//           bg-black/60
//           flex
//           items-center
//           justify-center
//           pt-17.5
//         "
//         >
//           {/* Centered content */}
//           <div className="text-center text-white px-6 max-w-2xl">
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//               Reserve Your <br />
//               <span className="text-red-400">Bus Seats</span> Now
//             </h1>

//             <p className="mt-6 text-gray-200 text-lg">
//               Find and book your bus seats with just a few clicks.
//               We offer a wide range of routes and schedules.
//             </p>

//             <button
//               onClick={() => navigate("/reserve")} 
//               className="mt-8 bg-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 cursor-pointer hover:bg-red-700 hover:scale-105"
//             >
//               Reserve Seat Now
//             </button>
//           </div>
//         </div>
//       </div>
//       <ServicesPage />
//     </>
//   );
// }

import ServicesPage from "./client/servicePage";
import ReservePage from "./client/reservePage";
import AboutUs from "./client/aboutPage";

export default function HomePage() {
  return (
    <>
      {/* ===== HOME SECTION ===== */}
      <section id="home">
        <div
          className="w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/bg1.webp')" }}
        >
          <div className="min-h-screen bg-black/60 flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold">
                Reserve Your <br />
                <span className="text-red-400">Bus Seats</span> Now
              </h1>

              <p className="mt-6 text-gray-200 text-lg">
                Find and book your bus seats with just a few clicks.
              </p>

              {/* Scroll button */}
              <a href="#reserve">
                <button className="mt-8 bg-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-700">
                  Reserve Seat Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services">
        <ServicesPage />
      </section>

      {/* ===== RESERVE SECTION ===== */}
      <section id="reserve">
        <ReservePage />
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about">
        <AboutUs />
      </section>
    </>
  );
}

