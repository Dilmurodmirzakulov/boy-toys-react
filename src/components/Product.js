import React from "react";
import { Link } from "react-router-dom";
import like from "../assets/img/ic_pr-like.svg";

const ProductItem = () => {
  return (
    <div className="es-product-wrapper">
      <div className="es-product-item">
        <div className="es-product-flag">new</div>
        <div className="es-product-img">
          <Link to={"/"}>
            <img
              src={require("../assets/img/product_1.jpg")}
              className="img-fluid"
              alt=""
            />
            <button className="btn es-product-like">
              <img src={like} alt="" />
            </button>
          </Link>
        </div>
        <div className="es-product-title">
          <Link to={"/"}>McLaren GT Ride-On</Link>
        </div>
        <div className="es-product-info">
          Этот автомобиль для езды наверняка подарит часы веселья и
          удовольствия.
        </div>
        <div className="es-product-options">
          <div className="es-pruduct-price">
            <div className="es-curr-price">250 000 сум</div>
            <div className="es-old-price">300 000 сум</div>
          </div>
          <div className="es-product-controls">
            <button
              className="btn btn-counter btn-minus"
              data-action="minus-quantity"
            >
              -
            </button>
            <span className="es-product-quantity ">1</span>
            <button
              className="btn btn-counter btn-plus"
              data-action="plus-quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
