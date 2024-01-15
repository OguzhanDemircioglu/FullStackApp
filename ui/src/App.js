import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/footer/Footer";
import SparePart from "./pages/SparePart/SparePart";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/sparePart" element={<SparePart />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/productDetail" element={<ProductDetail />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
