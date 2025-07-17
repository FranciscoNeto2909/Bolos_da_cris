import React from "react"
import "./header.css"

export default function Header() {
 
    return (
        <div className="header">
            <div className="logo">
                <div className="logo_img">
                    <img src="" alt="logo" />
                </div>
                <div className="logo_text">Bolos da cris</div>
                <div className="logo_cancel_btn">
                    <button>Cancelar pedido</button>
                </div>
            </div>
            <div className="search">
                search products
            </div>
            <div className="categories">
                Categories of products
            </div>
        </div>
    )
}