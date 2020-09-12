import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="container_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
        />

        <div className="home__row">
          <Product
            title="Olive Oil"
            price={29.9}
            image="https://pauliusmusteikisphoto.com/wp-content/uploads/2015/04/commercial_product_photography_Madison_WI_by_Paulius_Musteikis_Photography-1146.jpg"
           rating={3} />
          <Product />
        </div>

        <div className="home__row">
          {/* product */}
          <Product />
          <Product />
          <Product />
          {/* product */}
          {/* product */}
        </div>

        <div className="home__row">{/* product */}</div>
      </div>
    </div>
  );
}

export default Home;
