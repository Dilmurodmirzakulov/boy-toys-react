import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import facebook from "../assets/img/ic_facebook.svg";
import linkedin from "../assets/img/ic_linkedin.svg";
import instagram from "../assets/img/ic_instagram.svg";
import locationLogo from "../assets/img/ic_location.svg";

const Footer = () => {
  return (
    <>
      {" \n"}
      <footer>
        <div className="container">
          <div className="es-footer-container">
            <div className="es-footer-group">
              <Link to={"/"}>
                <img className="footer-logo" src={logo} alt="" />
              </Link>
              <div className="es-footer-desc">
                Игрушки были частью жизни ребенка на протяжении веков,
                обеспечивая бесконечные часы игры и воображения
              </div>
            </div>
            <div className="es-footer-group">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to={"/all-products"} className="nav-link">
                    Меню
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contacts"} className="nav-link">
                    Контакты
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/about"} className="nav-link">
                    О нас
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/public-offer"} className="nav-link">
                    Публичная офетра
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-lg-right">
              <div className="es-phone-label">Телефон</div>
              <div className="es-phone">
                <Link to={"tel:+998781503380"}>
                  +998 78 <span className="es-text-blue">150 33 80</span>
                </Link>
              </div>
              <div className="es-footer-info">
                <div>
                  Адрес: ул. Богибустон, 248, <br /> Tashkent 100121
                </div>
                <div className="es-footer-ic">
                  <img src={locationLogo} alt="" />
                </div>
              </div>
              <div className="es-footer-socials">
                <Link to={"/"} className="es-footer-ic">
                  <img src={facebook} alt='' />
                </Link>
                <Link to={"/"} className="es-footer-ic">
                  <img src={linkedin} alt='' />
                </Link>
                <Link to={"/"} className="es-footer-ic">
                  <img src={instagram} alt='' />
                </Link>
              </div>
            </div>
          </div>
          <div className="es-footer-bottom">
            <div className="es-footer-copyright">2023 © BoyToys.uz</div>
            <div className="es-footer-developer">
              Сайт разработан в <Link to={"https://zetta.uz"}>Zetta Online</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;