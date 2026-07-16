const HamburgerMenu = ({ setIsOpenHam }) => {
  return (
    <div className="fixed top-16 right-0 bottom-0 left-0 z-50 bg-black/40 md:hidden">
      <div className="h-full w-full bg-white/85 backdrop-blur-[10px] dark:bg-[rgba(25,25,25,0.9)]">
        <ul className="flex flex-col py-2 text-right">
          <li
            className="cursor-pointer border-b border-gray-400 px-6 py-4 transition-colors duration-200 hover:bg-[#9db6d8] dark:text-white dark:hover:bg-[#2f2f2f]"
            onClick={() => setIsOpenHam(false)}
          >
            <a href="#home">Home</a>
          </li>

          <li
            className="cursor-pointer border-b border-gray-400 px-6 py-4 transition-colors duration-200 hover:bg-[#9db6d8] dark:text-white dark:hover:bg-[#2f2f2f]"
            onClick={() => setIsOpenHam(false)}
          >
            <a href="#home">About</a>
          </li>

          <li
            className="cursor-pointer border-b border-gray-400 px-6 py-4 transition-colors duration-200 hover:bg-[#9db6d8] dark:text-white dark:hover:bg-[#2f2f2f]"
            onClick={() => setIsOpenHam(false)}
          >
            <a href="#services">Services</a>
          </li>

          <li
            className="cursor-pointer px-6 py-4 transition-colors duration-200 hover:bg-[#9db6d8] dark:text-white dark:hover:bg-[#2f2f2f]"
            onClick={() => setIsOpenHam(false)}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
