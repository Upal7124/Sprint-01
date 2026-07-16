import logo from "../assets/logo.webp";
import HamburgerMenu from "./HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpenHam, setIsOpenHam] = useState(false);

  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpenHam(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <nav className="fixed top-0 left-0 z-50 flex h-16 w-full items-center px-4 md:h-20 bg-white/20 backdrop-blur-2xl border-b border-white/30 shadow-xl dark:bg-zinc-900/50 dark:border-white/10 transition-all duration-300">
        <div className="flex h-20 w-[170px] items-center gap-4 md:h-28 md:w-[220px]">
          <img
            src={logo}
            alt="Prodesk Logo"
            loading="lazy"
            className="h-20 w-20 object-contain md:h-28 md:w-28"
          />

          <button
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/25 backdrop-blur-md text-xl text-yellow-100 shadow-md transition-all duration-300 hover:scale-110 hover:bg-white/40 active:scale-95 dark:bg-white/10 dark:border-white/10 dark:text-yellow-300 cursor-pointer"
          >
            {isDark ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
        <div className="ml-auto hidden md:block">
          <ul className="flex items-center gap-2">
            {[
              { name: "Home", link: "#home" },
              { name: "About", link: "#home" },
              { name: "Services", link: "#services" },
              { name: "Contact", link: "#footer" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="rounded-md px-4 py-2 text-white font-medium drop-shadow-md transition-all duration-300 hover:bg-white/10 hover:text-yellow-200
                  dark:hover:bg-white/10 dark:hover:text-yellow-300
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setIsOpenHam(!isOpenHam)}
          aria-label={isOpenHam ? "Close menu" : "Open menu"}
          className="ml-auto text-3xl text-white drop-shadow-md transition-transform duration-300 hover:scale-110 md:hidden
          "
        >
          {isOpenHam ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </nav>

      {isOpenHam && <HamburgerMenu setIsOpenHam={setIsOpenHam} />}
    </>
  );
};

export default Navbar;
