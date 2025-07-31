import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Data from "./data/data"
import Cart from "./components/cart/Cart";

function App() {
  const [openCart, setOpenCart] = useState(false)

  function handleOpenCart(){
    setOpenCart(!openCart)
  }

  return (
    <div className={`app_container ${openCart && "hide"}`}>
      <Header handleOpenCart={handleOpenCart} />
     {openCart && <Cart handleOpenCart={handleOpenCart}/>}
      <div className="products_container">
        {
          Data.map((cake, i) => (
           <>
           <Card cake={cake} key={i}/>
           </>
          ))
        }
        
      </div>
    </div>
  );
}

export default App;
