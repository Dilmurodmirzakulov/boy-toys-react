import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <main>
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb es-breadcrumb">
            <li class="breadcrumb-item">
              <Link to={"/"}>Главная</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Корзина
            </li>
          </ol>
        </nav>
        <h1 class="es-page-title">Корзина</h1>
      </div>
      <section class="es-cart-view">
        <div class="es-cart-header">
          <div class="container">
            <div class="es-ch-block">
              <div class="es-ch-product">Товар</div>
              <div class="es-ch-price">Цена</div>
              <div class="es-ch-quantity">Количество</div>
              <div class="es-ch-total">Итого</div>
              <div class="es-ch-action">Удалить</div>
            </div>
          </div>
        </div>
        <div class="es-cart-products">
          <div class="container">
            <div id="cart-content">
              <div class="es-ch-block es-cart-item">
                <div class="es-ch-product">
                  <div class="es-ch-img">
                    <img
                      src={require("../assets/img/product_1.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="es-ch-detail">
                    <div class="es-ch-title">PHILIP KINGSLEY</div>
                  </div>
                </div>
                <div class="es-ch-price">
                  <div class="es-ch-prices-wrapper">
                    <span>30 000 сум</span>
                    <span class="es-old-price">35 000 сум</span>
                  </div>
                </div>
                <div class="es-ch-quantity">
                  <div class="es-product-controls">
                    <button
                      class="btn btn-counter btn-minus"
                      data-action="minus-quantity"
                    >
                      -
                    </button>
                    <span class="es-product-quantity">1</span>
                    <button
                      class="btn btn-counter btn-minus"
                      data-action="plus-quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="es-ch-total">30 000 сум </div>
                <div class="es-ch-action">
                  <button class="btn">
                    <img src={require("../assets/img/ic_remove.svg")} alt="" />
                  </button>
                </div>
              </div>
              <div class="es-ch-block es-cart-item">
                <div class="es-ch-product">
                  <div class="es-ch-img">
                    <img
                      src={require("../assets/img/product_1.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="es-ch-detail">
                    <div class="es-ch-title">PHILIP KINGSLEY</div>
                  </div>
                </div>
                <div class="es-ch-price">
                  <div class="es-ch-prices-wrapper">
                    <span>30 000 сум</span>
                  </div>
                </div>
                <div class="es-ch-quantity">
                  <div class="es-product-controls">
                    <button
                      class="btn btn-counter btn-minus"
                      data-action="minus-quantity"
                    >
                      -
                    </button>
                    <span class="es-product-quantity">1</span>
                    <button
                      class="btn btn-counter btn-minus"
                      data-action="plus-quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="es-ch-total">30 000 сум </div>
                <div class="es-ch-action">
                  <button class="btn">
                    <img src={require("../assets/img/ic_remove.svg")} alt="" />
                  </button>
                </div>
              </div>
              <div class="es-cart-footer">
                <div class="es-cf-left">
                  <Link href="#" class="es-back-link">
                    <img
                      src={require("../assets/img/ic_back_link.svg")}
                      alt=""
                    />{" "}
                    Вернуться к покупкам
                  </Link>
                </div>
                <div class="es-cf-right">
                  <div class="es-cart-total">
                    <div class="es-ct-label">Итого:</div>
                    <div class="es-ct-value">60 000 сум </div>
                  </div>
                  <Link to={"/"} class="btn es-btn-dark w-100">
                    Перейти к оформлению
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
