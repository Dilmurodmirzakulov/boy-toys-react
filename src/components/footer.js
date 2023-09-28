import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="es-footer-container">
          <div class="es-footer-group">
            <img class="footer-logo" src={require("../assets/img/logo.png")} alt="" />
            <div class="es-footer-desc">
              Игрушки были частью жизни ребенка на протяжении веков, обеспечивая
              бесконечные часы игры и воображения
            </div>
          </div>
          <div class="es-footer-group">
            <ul class="nav flex-column">
              <li class="nav-item">
                <Link to={"/"} class="nav-link">
                  Меню
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} class="nav-link">
                  Контакты
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} class="nav-link">
                  О нас
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} class="nav-link">
                  Публичная офетра
                </Link>
              </li>
            </ul>
          </div>
          <div class="text-lg-right">
            <div class="es-phone-label">Телефон</div>
            <div class="es-phone">
              <Link to={"tel:+998781503380"}>
                +998 78 <span class="es-text-blue">150 33 80</span>
              </Link>
            </div>
            <div class="es-footer-info">
              <div>
                Адрес: ул. Богибустон, 248, <br /> Tashkent 100121
              </div>
              <div class="es-footer-ic">
                <img src={require("../assets/img/ic_location.svg")} alt="" />
              </div>
            </div>
            <div class="es-footer-socials">
              <Link to={"/"} class="es-footer-ic">
                <img src={require("../assets/img/ic_facebook.svg")}  alt="" />
              </Link>
              <Link class="es-footer-ic"  to={"/"}>
                <img src={require("../assets/img/ic_linkedin.svg")} alt="" />
              </Link>
              <Link class="es-footer-ic" to={"/"}>
              <img src={require("../assets/img/ic_instagram.svg")} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div class="es-footer-bottom">
          <div class="es-footer-copyright">2023 © BoyToys.uz</div>
          <div class="es-footer-developer">
            Сайт разработан в <Link to={"https://zetta.uz"}>Zetta Online</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
