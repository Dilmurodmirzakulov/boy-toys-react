import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
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
      </div>
      <section class="es-page-section">
        <div class="container">
          <div class="es-404-content">
            <h2 class="es-page-title">Страница не найдена.</h2>
            <div class="es-404-img">
              <img src={require("../assets/img/404.png")} class="img-fluid" alt="404" />
            </div>
            <Link to={"/"} class="btn es-order-btn mx-auto" >
              На главную
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Error;
