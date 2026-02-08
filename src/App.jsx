import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';

import HomePage from './pages/homePage';
import ServicesPage from './pages/client/servicePage';
import ReservePage from './pages/client/reservePage';
import BusDetails from './pages/client/busDetails';
import Checkout from './pages/client/checkoutPage';
import AboutUs from './pages/client/aboutPage';
import SignIn from './pages/signinPage';
import SignUp from './pages/signupPage';
import BookinDetails from './pages/client/bookingDetails';
import AdminPage from './pages/adminPage';

function App() {
  const location = useLocation();

  // check admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Hide Header in Admin */}
      {!isAdminRoute && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/reserve" element={<ReservePage />} />
        <Route path="/busDetails/:busId" element={<BusDetails />} />
        <Route path="/checkout/:busId" element={<Checkout />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking-success/:bookingId" element={<BookinDetails />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>

      {/* Hide Footer in Admin */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;

