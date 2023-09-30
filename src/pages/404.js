import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/img/404.png";

const NotFound = () => {
  return (
    <>
      <section className="es-page-section">
        <div className="container">
          <div className="es-404-content">
            <h2 className="es-page-title">Страница не найдена.</h2>
            <div className="es-404-img">
              <img src={img} className="img-fluid" alt="404" />
            </div>
            <Link to={"/"}>
              <button className="btn es-order-btn mx-auto">На главную</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
