// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";

// export default function SignUp() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const register = () => {
//     axios
//       .post(import.meta.env.VITE_BACKEND_URL + "/api/users/register", {
//         firstName,
//         lastName,
//         email,
//         phone,
//         password,
//       })
//       .then((res) => {
//         toast.success("Registration successful");
//         navigate("/signin");
//       })
//       .catch((err) => {
//         toast.error(err.response?.data?.message || "Registration failed");
//       });
//   };

//   return (
//     <div className="w-full h-screen bg-[url(./bg3.png)] bg-cover bg-center flex justify-center items-center">
//       <div className="w-125 min-h-137.5 backdrop-blur-sm shadow-2xl rounded-[30px] relative gap-5 text-white flex flex-col items-center justify-center p-5">
//         <h1 className="absolute top-5 text-2xl font-bold text-center">Sign Up</h1>

//         <div className="w-87.5 flex flex-col mt-5">
//           <span className="text-lg">First Name</span>
//           <input type="text" onChange={(e) => setFirstName(e.target.value)} className="w-87.5 h-10 border border-white rounded-xl px-2 text-black" />
//         </div>

//         <div className="w-87.5 flex flex-col">
//           <span className="text-lg">Last Name</span>
//           <input type="text" onChange={(e) => setLastName(e.target.value)} className="w-87.5 h-10 border border-white rounded-xl px-2 text-black" />
//         </div>

//         <div className="w-87.5 flex flex-col">
//           <span className="text-lg">Email</span>
//           <input type="email" onChange={(e) => setEmail(e.target.value)} className="w-87.5 h-10 border border-white rounded-xl px-2 text-black" />
//         </div>

//         <div className="w-87.5 flex flex-col">
//           <span className="text-lg">Phone</span>
//           <input type="text" onChange={(e) => setPhone(e.target.value)} className="w-87.5 h-10 border border-white rounded-xl px-2 text-black" />
//         </div>

//         <div className="w-87.5 flex flex-col">
//           <span className="text-lg">Password</span>
//           <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-87.5 h-10 border border-white rounded-xl px-2 text-black" />
//         </div>

//         <button
//           onClick={register}
//           className="w-87.5 h-10 rounded-xl text-white text-lg mt-5 bg-accent cursor-pointer transition-all duration-300"
//         >
//           Create
//         </button>

//         <p className="mt-2 text-secondary">
//           Already have an account? <Link to="/signin" className="text-accent">Sign In</Link>
//         </p>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = () => {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/users/register", {
        firstName,
        lastName,
        email,
        phone,
        password,
      })
      .then((res) => {
        toast.success("Registration successful");
        navigate("/signin");
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Registration failed");
      });
  };

  return (
    <div className="w-full h-screen flex">
      {/* Left Column: Background Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url('./logo.png')` }}
      ></div>

      {/* Right Column: Signup Form */}
      <div className="w-1/2 h-full flex justify-center items-center ">
        <div className="w-96 p-8 rounded-2xl shadow-lg flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>

          {/* First Name */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            />
          </div>

          <button
            onClick={register}
            className="bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-red-700 transition duration-300"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-600 mt-2">
            Already have an account?{" "}
            <Link to="/signin" className="text-red-600 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
