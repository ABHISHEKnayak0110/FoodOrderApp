
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css';
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Popular from "./Component/Popular/Popular";






function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="Popular" element={<Popular />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      
 
    </div>
  );
}

export default App;
