import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import About from "./pages/About";
import CheckOutPage from "./pages/CheckOutPage";
import Bookings from "./components/Bookings";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getLocationHotel/:location" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout/:id" element={<CheckOutPage />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
