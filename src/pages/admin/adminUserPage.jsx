import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
import Loader from "../../components/loader";
import { useNavigate } from "react-router-dom";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (isLoading) {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/signin");
        return;
      }

      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to load users");
        })
        .finally(() => setIsLoading(false));
    }
  }, [isLoading, navigate]);

  
  const handleDelete = (email) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Are you sure you want to delete this user?")) return;

    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/users/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("User deleted successfully");
        setIsLoading(true); 
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to delete user");
      });
  };

  return (
    <div className="w-full h-full p-4">
      <h1 className="text-2xl font-bold mb-4">Users (Admin)</h1>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-auto">
          <table className="w-full border-[3px]">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Role</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="p-2 border">{user.firstName} {user.lastName}</td>
                  <td className="p-2 border">{user.email}</td>
                  <td className="p-2 border">{user.phone}</td>
                  <td className="p-2 border">{user.role}</td>
                  <td className="p-2 border flex justify-center">
                    <BiTrash
                      className="bg-red-500 p-2 text-3xl rounded-full text-white cursor-pointer"
                      onClick={() => handleDelete(user.email)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
