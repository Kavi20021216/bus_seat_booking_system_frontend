import { Link } from "react-router-dom";
import { FaMapPin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-neutral-200/70 text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-4">

        {/* LOGO & DESCRIPTION */}
        <div className="md:col-span-2 space-y-4">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Bus Booking Logo"
              className="w-40 h-auto"
            />
          </Link>
          <p className="text-sm text-gray-600 max-w-md">
            Book your bus seats easily and safely. Choose from private and
            luxury buses and enjoy a comfortable journey.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-600">Home</Link></li>
            <li><Link to="/tickets" className="hover:text-red-600">Book Tickets</Link></li>
            <li><Link to="/about" className="hover:text-red-600">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-red-600">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <FaMapPin className="text-red-600 mt-1" />
            <p>
              Bus Seat Booking System <br />
              Colombo, Sri Lanka
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Bus Seat Booking System. All rights reserved.
      </div>
    </footer>
  );
}
