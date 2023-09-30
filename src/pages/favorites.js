import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../components/Product.js";
import backIcon from "../assets/img/ic_back_link.svg";

const Favorites = () => {
  return (
    <>
      <div className="es-page-section">
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
          <h1 className="es-page-title">Избранное</h1>
          <div className="es-products-list es-favorites-list">
            <ProductItem />
          </div>
          <div className="es-cf-left">
            <Link to={"/all-products"} className="es-back-link">
              <img src={backIcon} alt="" /> Вернуться к покупкам
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
