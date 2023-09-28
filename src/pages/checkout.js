import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
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
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link es-btn-dark active"
                    id="delivery-tab"
                    data-toggle="pill"
                    href="#delivery"
                    role="tab"
                    aria-controls="delivery"
                    aria-selected="true"
                  >
                    Доставка
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link es-btn-dark"
                    id="pickup-tab"
                    data-toggle="pill"
                    href="#pickup"
                    role="tab"
                    aria-controls="pickup"
                    aria-selected="false"
                  >
                    Самовывоз
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="delivery"
                  role="tabpanel"
                  aria-labelledby="delivery-tab"
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
                            name="OrderForm[name]"
                            placeholder="Введите Имя"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label" for="orderform-phone">
                            Номер
                          </label>
                          <input
                            type="text"
                            id="orderform-phone"
                            class="form-control"
                            name="OrderForm[phone]"
                            data-plugin="phone-mask"
                            placeholder="Введите номер телефона"
                          />
                        </div>
                      </div>
                    </div>
                    <p class="control-label">
                      <span class="es-text-blue">*</span> Найдите место на карте
                      и кликайте на него!
                    </p>
                    <div class="form-group" style="width: 100%">
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
                        <a href="https://www.maps.ie/distance-area-calculator.html">
                          measure acres/hectares on map
                        </a>
                      </iframe>
                      <button
                        class="btn es-map-btn d-md-none"
                        data-toggle="modal"
                        data-target="#mapModal"
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
                            name="OrderForm[address]"
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
                            name="OrderForm[point]"
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
                          name="OrderForm[payment]"
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
                        name="OrderForm[comment]"
                        rows="6"
                        placeholder="Комментарий к заказу"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div
                  class="tab-pane fade"
                  id="pickup"
                  role="tabpanel"
                  aria-labelledby="pickup-tab"
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
                            name="OrderForm[name]"
                            placeholder="Введите Имя"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label" for="orderform-phone">
                            Номер
                          </label>
                          <input
                            type="text"
                            id="orderform-phone"
                            class="form-control"
                            name="OrderForm[phone]"
                            data-plugin="phone-mask"
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
                                  Бухара. Халклар Дустлиги 1. Ориентир УзГазОил
                                  заправка
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
                        name="OrderForm[comment]"
                        rows="6"
                        placeholder="Комментарий к заказу"
                      ></textarea>
                    </div>
                  </form>
                </div>
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
            <Link href="#" class="es-back-link">
              <img src={require("../assets/img/ic_back_link.svg")} alt="" />{" "}
              Вернуться к покупкам
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
