import "./Footer.css";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/company/prodesk-it/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaXTwitter />
          </a>
        </div>

        <p className="copyright">&copy; 2026 Prodesk IT</p>
      </div>
    </footer>
  );
};

export default Footer;
