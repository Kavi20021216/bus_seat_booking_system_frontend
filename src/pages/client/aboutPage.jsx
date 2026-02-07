// src/pages/AboutUs.jsx
export default function AboutUs() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 "
    >
      <div className="max-w-5xl w-full bg-white p-10 md:p-14 rounded-2xl shadow-lg text-center">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          <span className="text-black">About </span>
          <span className="text-red-500">Us</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to our <span className="font-semibold">Bus Seat Booking Platform</span>,
          a modern and reliable solution designed to make your travel planning simple,
          fast, and stress-free.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We allow passengers to easily search bus routes, check availability,
          select preferred seats, and complete bookings in just a few clicks.
          Our platform is built with a user-friendly interface and real-time updates
          to ensure accuracy and convenience.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          Whether you are traveling for work, education, or leisure, our goal is to
          provide a smooth booking experience backed by secure payments,
          reliable schedules, and responsive customer support.
        </p>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="p-6 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To simplify bus seat reservations using modern technology and
              deliver a seamless travel experience.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become a trusted digital platform for passengers across the country.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Why Choose Us
            </h3>
            <p className="text-gray-700">
              Easy booking, secure payments, seat selection, and 24/7 customer support.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
