import React from "react";
import "./Product.css";
import { useStateValue } from "./ServiceProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket", basket);
  const addToBasket = () => {
    //dispatch the item to the data layer
    dispatch({
      type: "ADD_To_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <span role="img" aria-label="Heart">
                  ❤️
                </span>
              </p>
            ))}
        </div>
      </div>

      <img alt="" src={image} />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
