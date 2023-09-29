import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showMapModal } from "../store/actions/modalsAction";

const Checkout = () => {
  const [isDelivery, setIsDelivery] = useState(1);
  const dispatch = useDispatch();

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
                Корзина
              </li>
            </ol>
          </nav>
          <div class="row">
            <div class="col-md-6">
              <h1 class="es-page-title">Оформление заказа</h1>
              <ul class="nav nav-pills es-tabs" id="pills-tab" role="tablist">
                <li class="nav-item">
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
                <li class="nav-item">
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
              <div class="tab-content" id="pills-tabContent">
                {!!isDelivery ? (
                  <div
                    class="tab-pane fade show active"
                    id="delivery"
                  >
                    <form id="delivery-form" class="es-form" action="#">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="control-label" for="orderform-name">
                              ФИО
                            </label>
                            <input
                              type="text"
                              id="orderform-name"
                              class="form-control"
                              placeholder="Введите Имя"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="control-label" for="orderform-phone">
                              Номер
                            </label>
                            <ReactInputMask
                              class="form-control"
                              mask="+\9\98 (99) 999 99 99"
                              maskChar={null}
                              placeholder="Введите номер телефона"
                            />
                          </div>
                        </div>
                      </div>
                      <p class="control-label">
                        <span class="es-text-blue">*</span> Найдите место на
                        карте и кликайте на него!
                      </p>
                      <div
                        class="form-group"
                      >
                        <iframe
                          class="es-map"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                          src="https://maps.google.com/maps?width=100%25&amp;height=700&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                          width="100%"
                          height="450"
                          frameborder="0"
                        >
                          <Link to={"https://www.maps.ie/distance-area-calculator.html"}>
                            measure acres/hectares on map
                          </Link>
                        </iframe>
                        <button
                          class="btn es-map-btn d-md-none"
                          onClick={() => dispatch(showMapModal())}
                        >
                          Указать на карте
                        </button>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="control-label" for="address">
                              Адрес
                            </label>
                            <input
                              type="text"
                              id="address"
                              class="form-control"
                              placeholder="Введите адрес доставки"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="control-label" for="orderform-point">
                              Ориентир
                            </label>
                            <input
                              type="text"
                              id="orderform-point"
                              class="form-control"
                              placeholder="Введите ориентир"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label">
                          Выберите способ оплаты
                        </label>
                        <div class="form-group">
                          <input
                            type="hidden"
                            value=""
                          />
                          <div
                            id="orderform-payment"
                            class="es-pv-checklist"
                            role="radiogroup"
                          >
                            <div class="row">
                              <div class="col-6">
                                <label class="radio-label">
                                  <input
                                    type="radio"
                                    name="OrderForm[payment]"
                                    value="CASH"
                                  />
                                  Наличные
                                </label>
                                <label class="radio-label">
                                  <input
                                    type="radio"
                                    name="OrderForm[payment]"
                                    value="PAYME"
                                  />
                                  Payme
                                </label>
                              </div>
                              <div class="col-6">
                                <label class="radio-label">
                                  <input
                                    type="radio"
                                    name="OrderForm[payment]"
                                    value="CLICK"
                                  />
                                  Click
                                </label>
                                <label class="radio-label">
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
                      <div class="form-group">
                        <label class="control-label" for="orderform-comment">
                          Комментарий
                        </label>
                        <textarea
                          id="orderform-comment"
                          class="form-control"
                          rows="6"
                          placeholder="Комментарий к заказу"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div
                    class="tab-pane fade show active"
                    id="pickup"
                  >
                    <form id="pickup-form" class="es-form" action="#">
                      <input type="hidden" />
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="control-label" for="orderform-name">
                              ФИО
                            </label>
                            <input
                              type="text"
                              id="orderform-name"
                              class="form-control"
                              placeholder="Введите Имя"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="control-label" for="orderform-phone">
                              Номер
                            </label>
                            <ReactInputMask
                              class="form-control"
                              mask="+\9\98 (99) 999 99 99"
                              maskChar={null}
                              placeholder="Введите номер телефона"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="es-form-order">
                        <label class="control-label">Выберите филиал</label>
                      </div>
                      <div class="form-group">
                        <div class="es-radio-list">
                          <div class="form-group">
                            <div
                              id="orderform-branch"
                              class="es-pv-checklist"
                              role="radiogroup"
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <label class="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[branch]"
                                    />
                                    Наманган, ул И.Каримова 1
                                  </label>
                                  <label class="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[branch]"
                                    />
                                    Андижан, ул. Амир Темур шох 8
                                  </label>
                                </div>
                                <div class="col-md-6">
                                  <label class="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[branch]"
                                    />
                                    Ургенч, ул. Амударья д 62
                                  </label>
                                  <label class="radio-label">
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
                      <div class="form-group">
                        <label class="control-label">
                          Выберите способ оплаты
                        </label>
                        <div class="es-radio-list">
                          <div class="form-group">
                            <input
                              type="hidden"
                              name="OrderForm[payment]"
                              value=""
                            />
                            <div
                              id="orderform-payment"
                              class="es-pv-checklist"
                              role="radiogroup"
                              aria-required="true"
                            >
                              <div class="row">
                                <div class="col-6">
                                  <label class="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[payment]"
                                      value="CASH"
                                    />
                                    Наличные
                                  </label>
                                  <label class="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[payment]"
                                      value="PAYME"
                                    />
                                    Payme
                                  </label>
                                </div>
                                <div class="col-6">
                                  <label class="radio-label">
                                    <input
                                      type="radio"
                                      name="OrderForm[payment]"
                                      value="CLICK"
                                    />
                                    Click
                                  </label>
                                  <label class="radio-label">
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
                      <div class="form-group">
                        <label class="control-label" for="orderform-comment">
                          Комментарий
                        </label>
                        <textarea
                          id="orderform-comment"
                          class="form-control"
                          rows="6"
                          placeholder="Комментарий к заказу"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
            <div class="col-md-6 sm-px-0">
              <div class="es-checkout-items">
                <h4 class="es-tab-title mt-2">Ваш заказ:</h4>
                <div class="es-checkout-list">
                  <div class="es-checkout-item">
                    <div class="es-checkout-img">
                      <img
                        src={require("../assets/img/product_1.jpg")}
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="es-checkout-detail">
                      <div class="es-cp-title">
                        Название товара, в одну строку
                      </div>
                      <div class="es-product-calc">
                        1 x 56 000 сум = 56 000 сум{" "}
                      </div>
                    </div>
                  </div>
                  <div class="es-checkout-item">
                    <div class="es-checkout-img">
                      <img
                        src={require("../assets/img/product_1.jpg")}
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="es-checkout-detail">
                      <div class="es-cp-title">
                        Название товара, которое не помещается в одну строку.
                        Название товара, которое не помещается в одну строку
                      </div>
                      <div class="es-product-calc">
                        1 x 56 000 сум = 56 000 сум{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="es-checkout-footer">
                  <div id="deliveryPriceRow" class="es-checkout-row">
                    <div class="es-cf-title">Доставка:</div>
                    <div id="delivery-price" class="es-cf-value">
                      <span>0</span> сум
                    </div>
                    <div id="delivery-price-free" class="es-cf-value d-none">
                      Бесплатная доставка{" "}
                    </div>
                  </div>
                  <div class="es-checkout-row">
                    <div class="es-cf-title">Сумма заказа:</div>
                    <div
                      id="order-total"
                      class="es-cf-title"
                      data-price="63000"
                    >
                      <span>63 000</span> сум
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn es-btn-dark w-100"
                    name="confirm"
                    value="delivery"
                  >
                    Оформить заказ{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="es-cf-left">
            <Link to={"/cart"} class="es-back-link">
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
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 12.0596H9.83"
                  stroke="#20AEEA"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 4C7.58 4 4 7 4 12C4 17 7.58 20 12 20"
                  stroke="#20AEEA"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
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
