import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#6495ed] px-6 py-5 text-gray-900 dark:border-t dark:border-white/10 dark:bg-[#1b1b1b] dark:text-[#f5f5f5]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/company/prodesk-it/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[28px] text-gray-900 transition-all duration-300 hover:scale-110 hover:text-blue-100 dark:text-[#f5f5f5] dark:hover:scale-115 dark:hover:text-[#ffd54f]"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-[28px] text-gray-900 transition-all duration-300 hover:scale-110 hover:text-blue-100 dark:text-[#f5f5f5] dark:hover:scale-115 dark:hover:text-[#ffd54f]"
          >
            <FaXTwitter />
          </a>
        </div>

        <p className="text-center text-[15px] dark:text-gray-300">
          &copy; 2026 Prodesk IT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
