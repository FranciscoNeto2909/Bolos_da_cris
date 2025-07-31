import "./cart.css";

export default function Cart({items, handleOpenCart}) {

  return (
    <div className="cart_container">
      <div className="cart_order">
        <h3 className="cart_order_title">PEDIDO</h3>
        <div className="cart_order-buttons">
          <button className="cart_order_button">FINALIZAR PEDIDO</button>
          <button className="cart_order_button" onClick={handleOpenCart}>CONTINUAR COMPRANDO</button>
          <button className="cart_order_button">CANCELAR PEDIDO</button>
        </div>
      </div>
    </div>
  );
}
