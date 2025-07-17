import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png"
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo_img_container">
          <img className="logo_img" src={logo} alt="logo" />
        </div>
        <div className="cart">
          <button className="cart_button">
            <FaShoppingCart size={26} fill="#FFCC00" />
          </button>
        </div>
      </div>
      <div className="search">
        <input type="text" className="search_input" placeholder="Bolo de formigueiro" />
      </div>
      <div className="categories">Categories of products</div>
    </div>
  );
}
