import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div class="es-product-wrapper">
      <div class="es-product-item">
        <div class="es-product-flag">new</div>
        <div class="es-product-img">
          <Link to={"/"}>
            <img src={require("../assets/img/product_1.jpg")} class="img-fluid" alt="" />
            <button class="btn es-product-like">
              <img src={require("../assets/img/ic_pr-like.svg")} alt="" />
            </button>
          </Link>
        </div>
        <div class="es-product-title">
          <Link to={"/"}>McLaren GT Ride-On</Link>
        </div>
        <div class="es-product-info">
          Этот автомобиль для езды наверняка подарит часы веселья и
          удовольствия.
        </div>
        <div class="es-product-options">
          <div class="es-pruduct-price">
            <div class="es-curr-price">250 000 сум</div>
            <div class="es-old-price">300 000 сум</div>
          </div>
          <div class="es-product-controls">
            <button
              class="btn btn-counter btn-minus"
              data-action="minus-quantity"
            >
              -
            </button>
            <span class="es-product-quantity">1</span>
            <button
              class="btn btn-counter btn-plus"
              data-action="plus-quantity"
            >
              +
            </button>
          </div>
          <button class="btn btn-cart d-none" data-action="add-to-cart">
            <img src={require("../assets/img/ic_cart.svg")} alt="cart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
