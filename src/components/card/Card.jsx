import { useState } from "react";
import bolo from "../../assets/bolo.jpg";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import "./card.css";

export default function Card({ cake, key }) {
  const [price, setPrice] = useState(cake.prices[0]);
  const [size, setSize] = useState(cake.sizes[0]);
  const [inCart, setInCart] = useState(false);

  function handleChangePrice(e) {
    setPrice(e.price);
    setSize(e.size);
  }

  function handleAddCake() {
    setInCart(true);
  }
  function handleRemoveCake() {
    setInCart(false);
  }

  return (
    <div className="card" key={key}>
      <div className="card_head">
        <img src={bolo} alt="bolo" className="card_img" />
      </div>
      <div className="card_body">
        <h3 className="card_name">{cake.name}</h3>
        <div className="card_sizes">
          {cake.sizes.length > 1 && (
            <div className="card_sizes_buttons">
              {cake.sizes.map((size, i) => (
                <button
                  className="card_size_button"
                  name="card_size_button"
                  key={i}
                  onClick={() =>
                    handleChangePrice({
                      price: cake.prices[i],
                      size,
                    })
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          )}
          <p className="card_price">R$:{price}</p>
        </div>
      </div>
      <div className="card-buttons">
        {!inCart ? (
          <button name="card_button" className="card_button" onClick={handleAddCake}>
            <IoMdAddCircle size={45} fill="#fa6d01ff" />
          </button>
        ) : (
          <button name="card_button" className="card_button">
            <IoMdRemoveCircle
              size={45}
              fill="#fa6d01ff"
              onClick={handleRemoveCake}
            />
          </button>
        )}
      </div>
    </div>
  );
}
