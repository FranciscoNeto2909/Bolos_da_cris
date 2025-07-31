import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo.png";
import pao from "../../assets/pao.jpg";
import bolo from "../../assets/bolo.jpg";
import "./header.css";

export default function Header({handleOpenCart}) {
  
  const hasOrder = true

  const products = [
    { img: pao, name: "Pão" },
    { img: bolo, name: "Bolo" },
  ];

  return (
    <div className="header">
      <div className="logo">
        <div className="logo_img_container">
          <img className="logo_img" src={logo} alt="logo" />
        </div>
        {!hasOrder ? (
          <div className="cart">
            <button className="cart_button">cancelar pedido</button>
          </div>
        ) : (
          <div className="cart_button">
            <button onClick={handleOpenCart}>
              <AiOutlineShoppingCart size={26} fill="#fa6d01ff" />
            </button>
          </div>
        )}
      </div>
      <div className="search">
        <input
          type="text"
          className="search_input"
          placeholder="Bolo de formigueiro"
        />
      </div>
      <div className="categories">
        {products.map((prod, i) => (
          <button className="categories_button" key={i}>
            <div className="categories_item">
              <img
                src={prod.img}
                alt="categorie"
                className="categories_item_img"
              />
              <p className="categories_item_name">{prod.name}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
