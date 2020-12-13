const Header = () => {
  return (
    // Logo and Menu
    <header id="header">
      <div className="wrapper">
        <a href="#bootcamp">
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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <ul className="menu-right">
          <li className="menu-cta">
            <a href="#getstarted">Get Started</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
