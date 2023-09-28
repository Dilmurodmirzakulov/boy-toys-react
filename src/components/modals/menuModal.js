import React from "react";
import { Link } from "react-router-dom";

const MenuModal = () => {
  return (
    <div
      class="modal fade"
      id="menuModal"
      tabindex="-1"
      aria-labelledby="menuModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-full">
        <div class="modal-content">
          <div class="modal-header">
            <div class="es-logo">
              <img src={require("../../assets/img/logo.png")} alt="" />
            </div>
            <div class="es-mob-nav">
              <div class="dropdown es-lang-dropdown">
                <button
                  class="btn dropdown-toggle es-language-dropdown"
                  type="button"
                  id="languageDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={require("../../assets/img/ic_globe.svg")} alt="" />
                </button>
                <div
                  class="dropdown-menu es-dropdown-menu"
                  aria-labelledby="languageDropdown"
                >
                  <Link class="dropdown-item active">Рус</Link>
                  <Link class="dropdown-item">O'zb</Link>
                  <Link class="dropdown-item">Eng</Link>
                </div>
              </div>
              <Link class="es-favorites" to={"/"}>
                <img src={require("../../assets/img/ic_heart.svg")} alt="" />
              </Link>
              <button
                class="btn es-hamburger"
                data-target="#menuModal"
                data-toggle="modal"
              >
                <img
                  src={require("../../assets/img/ic_close.svg")}
                  alt="Menu"
                />
              </button>
            </div>
          </div>
          <div class="modal-body">
            <button class="btn es-btn-active w-100">На главную</button>
            <ul class="nav es-mob-cat-list">
              <li class="nav-item">
                <Link to={"/"} class="nav-link">
                  <span>Меню</span>
                  <img
                    src={require("../../assets/img/ic_cat-link.svg")}
                    alt=""
                  />
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} class="nav-link">
                  <span>Контакты</span>
                  <img
                    src={require("../../assets/img/ic_cat-link.svg")}
                    alt=""
                  />
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} class="nav-link">
                  <span>О нас</span>
                  <img
                    src={require("../../assets/img/ic_cat-link.svg")}
                    alt=""
                  />
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} class="nav-link">
                  <span>Публичная офетра</span>
                  <img
                    src={require("../../assets/img/ic_cat-link.svg")}
                    alt=""
                  />
                </Link>
              </li>
            </ul>
            <div class="es-modal-contact">
              <div class="es-phone-label">Телефон</div>
              <div class="es-phone">
                <Link to={"tel:+998 78 150 33 80"}>
                  +998 78 <span class="es-text-blue">150 33 80</span>
                </Link>
              </div>
              <div class="es-phone-label">Телефон доставки</div>
              <div class="es-phone">
                <Link to={"tel:+99890 825 26 10"}>
                  +998 90 <span class="es-text-blue">825 26 10</span>
                </Link>
              </div>
            </div>
            <div class="es-footer-info">
              <div class="es-footer-ic">
                <img
                  src={require("../../assets/img/ic_location-dark.svg")}
                  alt=""
                />
              </div>
              <div>
                Адрес: ул. Богибустон, 248, <br /> Tashkent 100121
              </div>
            </div>
            <div class="es-footer-socials">
              <Link to={"/"} class="es-footer-ic">
                <img
                  src={require("../../assets/img/ic_facebook-dark.svg")}
                  alt=""
                />
              </Link>
              <Link to={"/"} class="es-footer-ic">
                <img
                  src={require("../../assets/img/ic_linkedin-dark.svg")}
                  alt=""
                />
              </Link>
              <Link to={"/"} class="es-footer-ic">
                <img
                  src={require("../../assets/img/ic_instagram-dark.svg")}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
