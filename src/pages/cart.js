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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.16992 14.8299L14.8299 9.16992"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.8299 14.8299L9.16992 9.16992"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.16992 14.8299L14.8299 9.16992"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.8299 14.8299L9.16992 9.16992"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="es-cart-footer">
                <div class="es-cf-left">
                  <Link to={"/"} class="es-back-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3203 14.62L9.76031 12.06L12.3203 9.5"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 12.0596H9.83"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 4C7.58 4 4 7 4 12C4 17 7.58 20 12 20"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Вернуться к покупкам
                  </Link>
                </div>
                <div class="es-cf-right">
                  <div class="es-cart-total">
                    <div class="es-ct-label">Итого:</div>
                    <div class="es-ct-value">60 000 сум </div>
                  </div>
                  <Link class="btn es-btn-dark w-100" to={"/checkout"}>
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
