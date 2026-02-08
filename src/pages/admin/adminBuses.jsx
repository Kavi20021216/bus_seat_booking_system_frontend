import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiEdit, BiPlus, BiTrash } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

export default function AdminBusesPage() {
  const [buses, setBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      const token = localStorage.getItem("token");

      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/buses`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setBuses(res.data);
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to load buses");
        })
        .finally(() => setIsLoading(false));
    }
  }, [isLoading]);

  return (
    <div className="w-full h-full p-4">
      <h1 className="text-2xl font-bold mb-4">Buses (Admin)</h1>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-auto">
          <table className="w-full border-[3px]">
            <thead>
              <tr className="bg-red-200">
                <th className="p-2 border">Bus ID</th>
                <th className="p-2 border">Bus Name</th>
                <th className="p-2 border">Route</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Time</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {buses.map((bus, index) => (
                <tr key={index}>
                  <td className="p-2 border">{bus.busId}</td>
                  <td className="p-2 border">{bus.busName}</td>
                  <td className="p-2 border">
                    {bus.route.from} → {bus.route.to}
                  </td>
                  <td className="p-2 border">{bus.date}</td>
                  <td className="p-2 border">
                    {bus.time.from} - {bus.time.to}
                  </td>
                  <td className="p-2 border">{bus.category}</td>
                  <td className="p-2 border">
                    Rs. {bus.pricePerSeat}
                  </td>

                  <td className="p-2 border flex justify-center">
                    <BiTrash
                      className="bg-red-500 p-2 text-3xl rounded-full text-white cursor-pointer"
                      onClick={() => {
                        const token = localStorage.getItem("token");

                        axios
                          .delete(
                            `${import.meta.env.VITE_BACKEND_URL}/api/buses/${bus.busId}`,
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          )
                          .then(() => {
                            toast.success("Bus deleted successfully");
                            setIsLoading(true);
                          })
                          .catch(() => {
                            toast.error("Failed to delete bus");
                          });
                      }}
                    />

                    <BiEdit
                      className="bg-blue-500 p-2 text-3xl rounded-full text-white cursor-pointer ml-3"
                      onClick={() =>
                        navigate("/admin/updateBus", { state: bus })
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ADD BUS BUTTON */}
      <Link
        to="/admin/addBus"
        className="fixed bottom-6 right-6 flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full shadow-xl"
      >
        Add New Bus <BiPlus className="text-2xl" />
      </Link>
    </div>
  );
}
