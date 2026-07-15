import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  return (
    <div className="hamburger-overlay">
      <div className="hamburger-menu">
        <ul className="hamburger-list">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
