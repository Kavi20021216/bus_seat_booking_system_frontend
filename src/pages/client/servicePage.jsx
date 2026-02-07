import { FaLock, FaUndoAlt, FaHeadset } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <section className="w-full py-20 bg-white">
      
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-14">
        <span className="text-black">Our </span>
        <span className="text-red-500">Services</span>
      </h2>

      {/* SERVICES CARDS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div className="bg-neutral-200/70 rounded-xl p-8 text-center">
          <FaLock className="text-4xl text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-black mb-3">
            Secure Payment
          </h3>
          <p className="text-gray-800">
            Integrate secure payment gateways for users to pay for their tickets.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-neutral-200/70 rounded-xl p-8 text-center">
          <FaUndoAlt className="text-4xl text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-black mb-3">
            Refund Policy
          </h3>
          <p className="text-gray-800">
            Easy and transparent refund policies for cancelled or rescheduled trips.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-neutral-200/70 rounded-xl p-8 text-center">
          <FaHeadset className="text-4xl text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-black mb-3">
            24/7 Support
          </h3>
          <p className="text-gray-800">
            Our support team is available 24/7 to assist you with your bookings.
          </p>
        </div>

      </div>
    </section>
  );
}
