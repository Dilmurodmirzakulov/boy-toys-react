import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <main>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb es-breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}>Главная</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Корзина
            </li>
          </ol>
        </nav>
        <h1 className="es-page-title">Корзина</h1>
      </div>
      <section className="es-cart-view">
        <div className="es-cart-header">
          <div className="container">
            <div className="es-ch-block">
              <div className="es-ch-product">Товар</div>
              <div className="es-ch-price">Цена</div>
              <div className="es-ch-quantity">Количество</div>
              <div className="es-ch-total">Итого</div>
              <div className="es-ch-action">Удалить</div>
            </div>
          </div>
        </div>
        <div className="es-cart-products">
          <div className="container">
            <div id="cart-content">
              <div className="es-ch-block es-cart-item">
                <div className="es-ch-product">
                  <div className="es-ch-img">
                    <img
                      src={require("../assets/img/product_1.jpg")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="es-ch-detail">
                    <div className="es-ch-title">PHILIP KINGSLEY</div>
                  </div>
                </div>
                <div className="es-ch-price">
                  <div className="es-ch-prices-wrapper">
                    <span>30 000 сум</span>
                    <span className="es-old-price">35 000 сум</span>
                  </div>
                </div>
                <div className="es-ch-quantity">
                  <div className="es-product-controls">
                    <button
                      className="btn btn-counter btn-minus"
                      data-action="minus-quantity"
                    >
                      -
                    </button>
                    <span className="es-product-quantity">1</span>
                    <button
                      className="btn btn-counter btn-minus"
                      data-action="plus-quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="es-ch-total">30 000 сум </div>
                <div className="es-ch-action">
                  <button className="btn">
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
              <div className="es-ch-block es-cart-item">
                <div className="es-ch-product">
                  <div className="es-ch-img">
                    <img
                      src={require("../assets/img/product_1.jpg")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="es-ch-detail">
                    <div className="es-ch-title">PHILIP KINGSLEY</div>
                  </div>
                </div>
                <div className="es-ch-price">
                  <div className="es-ch-prices-wrapper">
                    <span>30 000 сум</span>
                  </div>
                </div>
                <div className="es-ch-quantity">
                  <div className="es-product-controls">
                    <button
                      className="btn btn-counter btn-minus"
                      data-action="minus-quantity"
                    >
                      -
                    </button>
                    <span className="es-product-quantity">1</span>
                    <button
                      className="btn btn-counter btn-minus"
                      data-action="plus-quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="es-ch-total">30 000 сум </div>
                <div className="es-ch-action">
                  <button className="btn">
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
              <div className="es-cart-footer">
                <div className="es-cf-left">
                  <Link to={"/"} className="es-back-link">
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
                <div className="es-cf-right">
                  <div className="es-cart-total">
                    <div className="es-ct-label">Итого:</div>
                    <div className="es-ct-value">60 000 сум </div>
                  </div>
                  <Link className="btn es-btn-dark w-100" to={"/checkout"}>
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
