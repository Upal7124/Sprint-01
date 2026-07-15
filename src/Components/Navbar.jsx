import "./Navbar.css";
import logo from "../assets/logo.png";
import HamburgerMenu from "./HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
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

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="ProDesk Logo" className="logo" />
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
