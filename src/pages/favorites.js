import React from "react";
import ProductItem from "../components/Product.js";
import { Link } from "react-router-dom";
import backIcon from "../assets/img/ic_back_link.svg";

const Favorites = () => {
  return (
    <>
      <div class="es-page-section">
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
          <h1 class="es-page-title">Избранное</h1>
          <div class="es-products-list es-favorites-list">
            <ProductItem />
          </div>
          <div class="es-cf-left">
            <a href="#" class="es-back-link">
              <img src={backIcon} alt="" /> Вернуться к покупкам
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
