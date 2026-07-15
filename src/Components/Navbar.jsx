import "./Navbar.css";
import logo from "../assets/logo.png";
import HamburgerMenu from "./HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpenHam, setIsOpenHam] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpenHam(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setIsDark(!isDark);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container ">
          <img src={logo} alt="Prodesk Logo" className="logo" />
          <div className="theme-container ">
            <button className="theme-button" onClick={toggleTheme}>
              {isDark ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>

        <div className="desktop-nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div
          className="mobile-menu-icon"
          onClick={() => setIsOpenHam(!isOpenHam)}
        >
          {isOpenHam ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      </nav>

      {isOpenHam && <HamburgerMenu />}
    </>
  );
};

export default Navbar;
