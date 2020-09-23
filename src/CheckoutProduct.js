import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./ServiceProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      <img className="checkoutProduct_image" src={image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="Heart">
                ❤️
              </span>
            ))}
        </div>
        <button className="" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
