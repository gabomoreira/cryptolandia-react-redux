import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [screen, setScreen] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screen > 768) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }, [screen]);

  return (
    <div className="header__container">
      <div className="header__logo">
        <img src="https://i.ibb.co/Z11pcGG/cryptocurrency.png" alt="" />
        <Link to="/">
          <h2>Cryptolândia</h2>
        </Link>
      </div>
      {activeMenu && (
        <div className="header__nav">
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/cryptocurrencies">
            <h4>Cryptocurrencies</h4>
          </Link>
        </div>
      )}

      <button className="menu-btn" onClick={() => setActiveMenu(!activeMenu)}>
        <MenuIcon />
      </button>
    </div>
  );
};

export default Header;
