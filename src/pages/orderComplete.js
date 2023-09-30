import React from "react";
import { Link } from "react-router-dom";

const OrderComplete = () => {
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb es-breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"}>Главная</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Заказ принят
          </li>
        </ol>
      </nav>
      <section className="es-page-section">
        <div className="es-order-complete">
          <h1 className="es-order-complete-title">Ваш заказ успешно принят!</h1>
          <div className="es-order-number">
            Номер заказа: <span className="es-text-blue">548648</span>
          </div>
          <p className="es-order-complete-desc">
            Оператор свяжется с вами для консультации в ближайшее время
          </p>
          <div className="row justify-content-center">
            <div className="col-6">
              <button className="btn es-btn-dark w-100">К оплате</button>
            </div>
            <div className="col-6">
              <Link to={"/"}>
                <button className="btn es-order-btn w-100">На главную</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderComplete;
