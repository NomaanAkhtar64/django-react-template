import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  siteName: string;
}

const Header: React.FC<HeaderProps> = ({ siteName }) => {
  return (
    <header>
      <div className="site-name">
        <Link to="/">{siteName}</Link>
      </div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
