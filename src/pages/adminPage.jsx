import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaBus, FaUsers, FaCogs } from "react-icons/fa";
import { MdBookOnline } from "react-icons/md";
import Loader from "../components/loader";
import AdminBuses from "./admin/adminBuses";
import AddBusPage from "./admin/adminBusAdd";
import UpdateBusPage from "./admin/adminBusUpdate";
import AdminBookingsPage from "./admin/adminBookingPage";
import AdminUsersPage from "./admin/adminUserPage";
import SettingsAdminPage from "./admin/adminSetting";


export default function AdminPage() {
  const navigate = useNavigate();
  const [adminValidated, setAdminValidated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.role === "admin") {
          setAdminValidated(true);
        } else {
          toast.error("Admins only");
          navigate("/");
        }
      })
      .catch(() => {
        toast.error("Session expired");
        navigate("/signin");
      });
  }, []);

  if (!adminValidated) return <Loader />;

  return (
    <div className="w-full h-screen flex">
      
      <div className="w-70 bg-gray-900 text-white flex flex-col">
        <div className="h-20 flex items-center justify-center text-2xl font-bold bg-red-600">
          Admin Panel
        </div>

        <nav className="flex flex-col gap-2 p-4">
          <Link className="admin-link flex flex-row gap-6.25 p-5" to="/admin">
            <FaBus /> Buses
          </Link>
          <Link className="admin-link flex flex-row gap-6.25 p-5 cursor-pointer" to="/admin/bookings">
            <MdBookOnline /> Bookings
          </Link>
          <Link className="admin-link flex flex-row gap-6.25 p-5 cursor-pointer" to="/admin/users">
            <FaUsers /> Users
          </Link>
          <Link className="admin-link flex flex-row gap-6.25 p-5 cursor-pointer" to="/admin/settings">
            <FaCogs /> Settings
          </Link>
        </nav>
      </div>

      
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Routes>
          <Route path="" element={<AdminBuses />} />
          <Route path="/addBus" element={<AddBusPage/>}/>
          <Route path="/updateBus" element={<UpdateBusPage/>}/>
          <Route path="bookings" element={<AdminBookingsPage />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="settings" element={<SettingsAdminPage />} />
        </Routes>
      </div>
    </div>
  );
}
