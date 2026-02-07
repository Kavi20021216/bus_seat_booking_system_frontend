// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";

// export default function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const login = () => {
//     axios
//       .post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", { email, password })
//       .then((res) => {
//         localStorage.setItem("token", res.data.token);
//         toast.success("Login successful");
//         navigate("/"); // redirect to home
//       })
//       .catch((err) => {
//         toast.error(err.response?.data?.message || "Login failed");
//       });
//   };

//   return (
//     <div className="w-full h-screen bg-[url(./bg2.png)] bg-cover bg-center flex justify-center items-center">
//       <div className="w-125 min-h-100 backdrop-blur-sm shadow-2xl rounded-[30px] relative gap-5 text-white flex flex-col items-center justify-center p-5">
//         <h1 className="absolute top-5 text-2xl font-bold text-center">Sign In</h1>

//         <div className="w-87.5 flex flex-col mt-5">
//           <span className="text-lg">Email</span>
//           <input type="email" onChange={(e) => setEmail(e.target.value)} className="w-87.5 h-10 border border-white rounded-xl px-2 text-black" />
//         </div>

//         <div className="w-87.5 flex flex-col">
//           <span className="text-lg">Password</span>
//           <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-87.5 h-10 border border-white rounded-xl px-2 text-black" />
//         </div>

//         <button
//           onClick={login}
//           className="w-87.5 h-10 rounded-xl text-white text-lg mt-5 bg-accent cursor-pointer transition-all duration-300"
//         >
//           Sign In
//         </button>

//         <p className="mt-2 text-secondary">
//           Don't have an account? <Link to="/signup" className="text-accent">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import toast from "react-hot-toast"; // optional, or use alert()

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // toast.success("Login successful");
        alert("Login successful");
        navigate("/"); // redirect to home
      })
      .catch((err) => {
        // toast.error(err.response?.data?.message || "Login failed");
        alert(err.response?.data?.message || "Login failed");
      });
  };

  return (
    <div className="w-full h-screen flex">
      {/* Left Column: Background Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url('./logo.png')` }}
      ></div>

      {/* Right Column: Sign In Form */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-96 p-8 bg-white rounded-2xl shadow-lg flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-center text-black mb-4">Sign In</h1>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-black mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-black mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            />
          </div>

          <button
            onClick={() => navigate("/")}
            className="bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-red-700 transition duration-300"
          >
            Sign In
          </button>

          <p className="text-center text-gray-600 mt-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-red-600 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

