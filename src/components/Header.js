import useWebAnimations from "@wellyshen/use-web-animations";

const Header = () => {
  return (
    // Logo and Menu
    <header id="header">
      <div className="wrapper">
        <a href="#">
          <h2>Bootcamp 2020</h2>
        </a>

        <button id="submenu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Links */}

        <ul className="menu-left">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul className="menu-right">
          <li className="menu-cta">
            <a href="">Get Started</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
