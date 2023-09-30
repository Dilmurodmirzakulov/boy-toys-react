import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactInputMask from "react-input-mask";
import { showMapModal } from "../store/actions/modalsAction";

const Checkout = () => {
  const [isDelivery, setIsDelivery] = useState(1);
  const dispatch = useDispatch();

  return (
    <main>
      <section className="es-page-section">
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
          <div className="row">
            <div className="col-md-6">
              <h1 className="es-page-title">Оформление заказа</h1>
              <ul
                className="nav nav-pills es-tabs"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <button
                    class={`btn nav-link es-btn-dark ${
                      !!isDelivery && "active"
                    }`}
                    id="delivery-tab"
                    onClick={() => setIsDelivery(1)}
                  >
                    Доставка
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    class={`btn nav-link es-btn-dark ${
                      !isDelivery && "active"
                    }`}
                    id="pickup-tab"
                    onClick={() => setIsDelivery(0)}
                  >
                    Самовывоз
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                {!!isDelivery ? (
                  <div className="tab-pane fade show active" id="delivery">
                    <form id="delivery-form" className="es-form" action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="control-label"
                              for="orderform-name"
                            >
                              ФИО
                            </label>
                            <input
                              type="text"
                              id="orderform-name"
                              className="form-control"
                              placeholder="Введите Имя"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="control-label"
                              for="orderform-phone"
                            >
                              Номер
                            </label>
                            <ReactInputMask
                              className="form-control"
                              mask="+\9\98 (99) 999 99 99"
                              maskChar={null}
                              placeholder="Введите номер телефона"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="control-label">
                        <span className="es-text-blue">*</span> Найдите место на
                        карте и кликайте на него!
                      </p>
                      <div className="form-group">
                        <iframe
                          className="es-map"
                          scrolling="no"
                          marginHeight="0"
                          marginWidth="0"
                          src="https://maps.google.com/maps?width=100%25&amp;height=700&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                          width="100%"
                          height="450"
                          frameBorder="0"
                        >
                          <Link
                            to={
                              "https://www.maps.ie/distance-area-calculator.html"
                            }
                          >
                            measure acres/hectares on map
                          </Link>
                        </iframe>
                        <button
                          className="btn es-map-btn d-md-none"
                          onClick={() => dispatch(showMapModal())}
                        >
                          Указать на карте
                        </button>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label" for="address">
                              Адрес
                            </label>
                            <input
                              type="text"
                              id="address"
                              className="form-control"
                              placeholder="Введите адрес доставки"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="control-label"
                              for="orderform-point"
                            >
                              Ориентир
                            </label>
                            <input
                              type="text"
                              id="orderform-point"
                              className="form-control"
                              placeholder="Введите ориентир"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label">
                          Выберите способ оплаты
                        </label>
                        <div className="form-group">
                          <input type="hidden" value="" />
                          <div
                            id="orderform-payment"
                            className="es-pv-checklist"
                            role="radiogroup"
                          >
                            <div className="row">
                              <div className="col-6">
                                <label className="radio-label">
                                  <input
                                    type="radio"
                                    name="OrderForm[payment]"
                                    value="CASH"
                                  />
                                  Наличные
                                </label>
                                <label className="radio-label">
                                  <input
                                    type="radio"
                                    name="OrderForm[payment]"
                                    value="PAYME"
                                  />
                                  Payme
                                </label>
                              </div>
                              <div className="col-6">
                                <label className="radio-label">
                                  <input
                                    type="radio"
                                    name="OrderForm[payment]"
                                    value="CLICK"
                                  />
                                  Click
                                </label>
                                <label className="radio-label">
                                  <input
                                    type="radio"
                                    name="OrderForm[payment]"
                                    value="TERMINAL"
                                  />
                                  Терминал
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          className="control-label"
                          for="orderform-comment"
                        >
                          Комментарий
                        </label>
                        <textarea
                          id="orderform-comment"
                          className="form-control"
                          rows="6"
                          placeholder="Комментарий к заказу"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="tab-pane fade show active" id="pickup">
                    <form id="pickup-form" className="es-form" action="#">
                      <input type="hidden" />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="control-label"
                              for="orderform-name"
                            >
                              ФИО
                            </label>
                            <input
                              type="text"
                              id="orderform-name"
                              className="form-control"
                              placeholder="Введите Имя"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="control-label"
                              for="orderform-phone"
                            >
                              Номер
                            </label>
                            <ReactInputMask
                              className="form-control"
                              mask="+\9\98 (99) 999 99 99"
                              maskChar={null}
                              placeholder="Введите номер телефона"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="es-form-order">
                        <label className="control-label">Выберите филиал</label>
                      </div>
                      <div className="form-group">
                        <div className="es-radio-list">
                          <div className="form-group">
                            <div
                              id="orderform-branch"
                              className="es-pv-checklist"
                              role="radiogroup"
                            >
                              <div className="row">
                                <div className="col-md-6">
                                  <label className="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[branch]"
                                    />
                                    Наманган, ул И.Каримова 1
                                  </label>
                                  <label className="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[branch]"
                                    />
                                    Андижан, ул. Амир Темур шох 8
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[branch]"
                                    />
                                    Ургенч, ул. Амударья д 62
                                  </label>
                                  <label className="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[branch]"
                                    />
                                    Бухара. Халклар Дустлиги 1. Ориентир
                                    УзГазОил заправка
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label">
                          Выберите способ оплаты
                        </label>
                        <div className="es-radio-list">
                          <div className="form-group">
                            <input
                              type="hidden"
                              name="OrderForm[payment]"
                              value=""
                            />
                            <div
                              id="orderform-payment"
                              className="es-pv-checklist"
                              role="radiogroup"
                              aria-required="true"
                            >
                              <div className="row">
                                <div className="col-6">
                                  <label className="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[payment]"
                                      value="CASH"
                                    />
                                    Наличные
                                  </label>
                                  <label className="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[payment]"
                                      value="PAYME"
                                    />
                                    Payme
                                  </label>
                                </div>
                                <div className="col-6">
                                  <label className="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[payment]"
                                      value="CLICK"
                                    />
                                    Click
                                  </label>
                                  <label className="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[payment]"
                                      value="TERMINAL"
                                    />
                                    Терминал
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          className="control-label"
                          for="orderform-comment"
                        >
                          Комментарий
                        </label>
                        <textarea
                          id="orderform-comment"
                          className="form-control"
                          rows="6"
                          placeholder="Комментарий к заказу"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 sm-px-0">
              <div className="es-checkout-items">
                <h4 className="es-tab-title mt-2">Ваш заказ:</h4>
                <div className="es-checkout-list">
                  <div className="es-checkout-item">
                    <div className="es-checkout-img">
                      <img
                        src={require("../assets/img/product_1.jpg")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="es-checkout-detail">
                      <div className="es-cp-title">
                        Название товара, в одну строку
                      </div>
                      <div className="es-product-calc">
                        1 x 56 000 сум = 56 000 сум{" "}
                      </div>
                    </div>
                  </div>
                  <div className="es-checkout-item">
                    <div className="es-checkout-img">
                      <img
                        src={require("../assets/img/product_1.jpg")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="es-checkout-detail">
                      <div className="es-cp-title">
                        Название товара, которое не помещается в одну строку.
                        Название товара, которое не помещается в одну строку
                      </div>
                      <div className="es-product-calc">
                        1 x 56 000 сум = 56 000 сум{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="es-checkout-footer">
                  <div id="deliveryPriceRow" className="es-checkout-row">
                    <div className="es-cf-title">Доставка:</div>
                    <div id="delivery-price" className="es-cf-value">
                      <span>0</span> сум
                    </div>
                    <div
                      id="delivery-price-free"
                      className="es-cf-value d-none"
                    >
                      Бесплатная доставка{" "}
                    </div>
                  </div>
                  <div className="es-checkout-row">
                    <div className="es-cf-title">Сумма заказа:</div>
                    <div
                      id="order-total"
                      className="es-cf-title"
                      data-price="63000"
                    >
                      <span>63 000</span> сум
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn es-btn-dark w-100"
                    name="confirm"
                    value="delivery"
                  >
                    Оформить заказ{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="es-cf-left">
            <Link to={"/cart"} className="es-back-link">
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
        </div>
      </section>
    </main>
  );
};

export default Checkout;
