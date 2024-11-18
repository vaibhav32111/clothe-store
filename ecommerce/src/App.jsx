import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import { Myprovider } from "./components/Context/ProductContext";
import EmptyCart from "./components/EmptyCart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import MenSection from "./components/MenSection";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Singlepage from "./components/Singlepage";
import Women from "./components/Women";

function App() {
  const{cartproduct,isAuthenticate}=Myprovider();
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AllProduct" element={<AllProducts />} />
      <Route path="/MenSection" element={<MenSection />} />
      <Route path="/WomenSection" element={<Women />} />
      <Route path="/SingleProduct/:id" element={<Singlepage/>} />
      <Route path="/Cart" element={cartproduct.length===0 ? <EmptyCart/>:<Cart/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
    <Footer />
    <ToastContainer
    position="top-center"
    autoCLoase={1000}
    transition:Slide
    theme="dark"

    />
    </BrowserRouter>
    </>
  )
}

export default App;

