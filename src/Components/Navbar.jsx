import logo from "../assets/logo.webp";
import HamburgerMenu from "./HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpenHam, setIsOpenHam] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpenHam(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 flex h-16 w-full items-center bg-blue-700 px-4 md:h-20 dark:bg-[#1b1b1b]">
        <div className="flex h-20 w-[150px] items-center gap-3 py-4 md:h-28 md:w-[200px] md:gap-4">
          <img
            src={logo}
            loading="lazy"
            alt="Prodesk Logo"
            className="h-20 w-20 object-contain md:h-28 md:w-28"
          />

          <button
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl text-[#fff8dc] transition duration-300 hover:scale-110 hover:bg-white/35 active:scale-95 dark:bg-white/10 dark:text-[#ffd54f] md:h-[42px] md:w-[42px] cursor-pointer"
          >
            {isDark ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>

        <div className="ml-auto hidden md:block">
          <ul className="flex text-white">
            <li className="cursor-pointer px-4 text-white transition duration-200 hover:text-yellow-200 hover:underline focus-visible:text-yellow-200 focus-visible:underline focus-visible:outline-none dark:hover:text-[#ffd54f]">
              <a href="#home">Home</a>
            </li>

            <li className="cursor-pointer px-4 text-white transition duration-200 hover:text-yellow-200 hover:underline focus-visible:text-yellow-200 focus-visible:underline focus-visible:outline-none dark:hover:text-[#ffd54f]">
              <a href="#home">About</a>
            </li>

            <li className="cursor-pointer px-4 text-white transition duration-200 hover:text-yellow-200 hover:underline focus-visible:text-yellow-200 focus-visible:underline focus-visible:outline-none dark:hover:text-[#ffd54f]">
              <a href="#services">Services</a>
            </li>

            <li className="cursor-pointer px-4 text-white transition duration-200 hover:text-yellow-200 hover:underline focus-visible:text-yellow-200 focus-visible:underline focus-visible:outline-none dark:hover:text-[#ffd54f]">
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>

        <button
          onClick={() => setIsOpenHam(!isOpenHam)}
          aria-label={isOpenHam ? "Close menu" : "Open menu"}
          className="ml-auto text-[28px] text-white md:hidden dark:text-white"
        >
          {isOpenHam ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </nav>

      {isOpenHam && <HamburgerMenu setIsOpenHam={setIsOpenHam} />}
    </>
  );
};

export default Navbar;
