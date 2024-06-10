import React, { useEffect, useState } from "react";
import "./App.css";
import Homescreen from "./screens/Homescreen";
import Landingscreen from "./screens/Landingscreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MdLaptopWindows } from "react-icons/md";
import { BsExclamationLg } from "react-icons/bs";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check the initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="mobile">
        <h3 className='warning'>< MdLaptopWindows id="desktop"/> Please view this website on a desktop for the best experience<BsExclamationLg  id="exclamation"/></h3>
      </div>
      ) : (
        <BrowserRouter className="App">
          <Routes>
            <Route path="/" element={<Landingscreen />} />
            <Route path="/sudarsan-portfolio" element={<Homescreen />} />
          </Routes>
        </BrowserRouter>
      )
      }
    </div>
  );
}

export default App;