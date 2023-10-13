import React from "react";
import { Link } from "react-router-dom";
import Logo from "/assets/images/furniture-logo.png";
import User from "/assets/images/user.png";
import Search from "/assets/images/search.png";
import Heart from "/assets/images/heart.png";
import Cart from "/assets/images/cart.png";

const Header = () => {
  return (
    <div>
      <header id="header">
        <nav className="flex items-center justify-between">
          {/* Logo section */}
          <div>
            <img src={Logo} alt="Logo" />
          </div>

          {/* Header Link */}

          <div className="flex gap-4 text-base">
            <Link to={"/"}>
              <p className="text-lg">Home</p>
            </Link>
            <Link to={"/"}>
              <p className="text-lg">Shop</p>
            </Link>

            <Link to={"/About"}>
              <p className="text-lg">About</p>
            </Link>
            <Link to={"/Contact"}>
              <p className="text-lg">Contact</p>
            </Link>
          </div>

          {/* Header User Section */}
          <div className="flex gap-4">
            <Link to={"/Login"}>
              <img src={User} alt="User" />
            </Link>
            <img src={Search} alt="Search" />
            <img src={Heart} alt="Heart" />

            <Link to={""}>
              <img src={Cart} alt="Cart" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
