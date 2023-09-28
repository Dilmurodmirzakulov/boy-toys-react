import React from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  return (
    <main>
      <section class="es-page-section">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb es-breadcrumb">
              <li class="breadcrumb-item">
                <Link to={"/"}>Главная</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Все продукты
              </li>
            </ol>
          </nav>
          <h1 class="es-page-title">Все продукты</h1>
          <div class="es-products-list es-favorites-list">
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">new</div>
                <div class="es-product-img">
                  <Link to={"/"}>
                    <img
                      src={require("../assets/img/product_1.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                    <button class="btn es-product-like">
                      <img
                        src={require("../assets/img/ic_pr-like.svg")}
                        alt=""
                      />
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
                    <img src="img/ic_cart.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="es-cf-left">
            <Link to={"/"} class="es-back-link">
              <img src={require("../assets/img/ic_back_link.svg")} alt='' /> Вернуться к покупкам
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllProducts;
