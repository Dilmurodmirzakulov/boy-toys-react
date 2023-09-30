import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../components/Product.js";
import svgIcon from "../assets/img/ic_back_link.svg";

const AllProducts = () => {
  return (
    <>
      <section className="es-page-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb es-breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>Главная</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Все продукты
              </li>
            </ol>
          </nav>
          <h1 className="es-page-title">Все продукты</h1>
          <div className="es-products-list es-favorites-list">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          <div className="es-cf-left">
            <a href="#" className="es-back-link">
              <img src={svgIcon} alt="" /> Вернуться к покупкам
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
