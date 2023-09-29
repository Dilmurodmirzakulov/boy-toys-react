import React from "react";
import { Link } from "react-router-dom";

const OrderComplete = () => {
  return (
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb es-breadcrumb">
          <li class="breadcrumb-item">
            <Link to={"/"}>Главная</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Заказ принят
          </li>
        </ol>
      </nav>
      <section class="es-page-section">
        <div class="es-order-complete">
          <h1 class="es-order-complete-title">Ваш заказ успешно принят!</h1>
          <div class="es-order-number">
            Номер заказа: <span class="es-text-blue">548648</span>
          </div>
          <p class="es-order-complete-desc">
            Оператор свяжется с вами для консультации в ближайшее время
          </p>
          <div class="row justify-content-center">
            <div class="col-6">
              <button class="btn es-btn-dark w-100">К оплате</button>
            </div>
            <div class="col-6">
              <Link to={"/"}>
                {" "}
                <button class="btn es-order-btn w-100">На главную</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderComplete;
