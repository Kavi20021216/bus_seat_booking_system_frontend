import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homePage';
// import ServicesPage from './pages/client/servicePage';
// import ReservePage from './pages/client/reservePage';
import BusDetails from './pages/client/busDetails';
import Checkout from './pages/client/checkoutPage';
// import AboutUs from './pages/client/aboutPage';
import SignIn from './pages/signinPage';
import SignUp from './pages/signupPage';


function App() {
  return (
     <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/services" element={<ServicesPage />} />
        <Route path="/reserve" element={<ReservePage />} /> */}
        <Route path="/busDetails/:busId" element={<BusDetails />} />
        <Route path="/checkout/:busId" element={<Checkout />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
         <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
