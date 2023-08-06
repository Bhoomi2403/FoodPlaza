import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Menu from "./Components/Pages/Menu";
import Addtocart from "./Components/Pages/Addtocart";
import Pagenotfound from "./Components/Pages/Pagenotfound";
import Signup from "./Components/Pages/Signup";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Addtocart/>}/>
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
