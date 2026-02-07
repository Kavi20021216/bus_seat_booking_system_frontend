// import { Link, useNavigate } from "react-router-dom";
// export default function Header() {
//     const navigate = useNavigate();
//     return (
//         <div>
//             <header className="fixed top-0 left-0 right-0 h-[100px] z-20 border-4 border-purple-600 w-full py-3 p-3 flex items-center">
//                 <div className=" flex w-[450px] h-full p-0.5  items-center flex-row">
//                     <img
//                         className="w-[120px] h-[70px] object-cover cursor-pointer"
//                         onClick={() => navigate("/")}
//                         src="/logo.png"
//                         alt="Logo"
//                     />

//                 </div>
//                 <div className="w-full  ml-[150px] flex  items-center">
//                     <Link to="/" className="ml-20 text-purple-400 text-xl ">
//                         Home
//                     </Link>
//                     <Link to="/blogs" className="ml-20 text-purple-400 text-xl ">
//                         Blogs
//                     </Link>
//                     <Link to="/about" className="ml-20 text-purple-400 text-xl ">
//                         About
//                     </Link>
//                     <Link to="/contact-us" className="ml-20 text-purple-400 text-xl ">
//                         Contact Us
//                     </Link>

//                     <button className="bg-purple-500 text-xl p-1 text-white text-center cursor-pointer rounded-[5px]  ml-40">
//                         LogOut
//                     </button>
//                 </div>
//             </header>
//         </div>
//     )
// }


import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            {/* NAVBAR */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80  h-17.5   flex items-center px-6">

                {/* LEFT - LOGO */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <img
                        className="w-15 h-20 object-cover absolute md:left-10 cursor-pointer"
                        onClick={() => window.location.hash = "#home"}

                        src="/logo.png"
                        alt="Bus Logo"

                    />
                </div>

                {/* CENTER MENU (DESKTOP) */}
                <nav className="hidden md:flex flex-1 justify-center gap-10 text-gray-700 font-medium">
                    <Link to="/" className="hover:text-black">Home</Link>
                    <Link to="/services" className="hover:text-black">Services</Link>
                    <Link to="/reserve" className="hover:text-black">Reserve</Link>
                    <Link to="/about" className="hover:text-black">About</Link>

                </nav>

                {/* RIGHT - SIGN IN (DESKTOP) */}
                <div className="hidden md:block">
                    <button
                        onClick={() => navigate("/signin")}
                        className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 hover:scale-105 transition cursor-pointer"
                    >
                        Sign In
                    </button>
                </div>

                {/* HAMBURGER (MOBILE) */}
                <GiHamburgerMenu
                    className="md:hidden text-2xl ml-auto cursor-pointer"
                    onClick={() => setIsOpen(true)}
                />
            </header>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/40">
                    <div className="w-65 h-full bg-white p-6">

                        <div className="flex justify-between items-center mb-8">
                            <img
                                className="w-25 h-20 object-cover absolute md:left-10 cursor-pointer"
                                onClick={() => window.location.hash = "#home"}

                                src="/logo.png"
                                alt="Bus Logo"

                            />
                            <button onClick={() => setIsOpen(false)}>✕</button>
                        </div>

                        <div className="flex flex-col gap-5 text-gray-700 font-medium">
                            <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
                            <Link onClick={() => setIsOpen(false)} to="/services">Services</Link>
                            <Link onClick={() => setIsOpen(false)} to="/reserve">Reserve</Link>
                            <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    navigate("/signin");
                                }}
                                className="mt-6 bg-red-600 text-white py-2 rounded-full"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* SPACER */}
            <div className="h-17.5" />
        </>
    );
}
