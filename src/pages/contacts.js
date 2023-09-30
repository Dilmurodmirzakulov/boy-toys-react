import React from "react";
import { Link } from "react-router-dom";
import contact from "../assets/img/contact.jpg";
import contactMan from "../assets/img/contact-man.png";
import linkedin from "../assets/img/ic_linkedin-dark.svg";
import instagram from "../assets/img/ic_instagram-dark.svg";
import facebookDark from "../assets/img/ic_facebook-dark.svg";
const Contacts = () => {
  return (
    <>
      <section className="es-bg-dark">
        <div className="es-about-page-row">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="es-comp-main-content">
                  <h1 className="ec-team-title">Контакты</h1>
                  <nav aria-label="breadcrumb" className="ec-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to={"/"}>Главная</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Контакты
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-md-6 sm-hide"></div>
            </div>
          </div>
          <div className="es-full-right-half">
            <img src={contact} className="img-fluid" loading="lazy" alt="" />
          </div>
        </div>
      </section>
      <section className="es-contacts-section">
        <div className="container">
          <h2 className="ec-section-title">Контакты</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="es-contact-content">
                <div className="es-contact">
                  <div className="es-contact-prop">Адрес</div>
                  <div className="es-contact-value">
                    ул. Богибустон, 248, Tashkent 100121
                  </div>
                </div>
                <div className="es-contact">
                  <div className="es-contact-prop">Телефон</div>
                  <Link
                    to={"tel:+998 78 150 33 80"}
                    className="es-contact-number"
                  >
                    +998 78 150 33 80
                  </Link>
                </div>
                <div className="es-contact">
                  <div className="es-contact-prop">Телефон доставки</div>
                  <Link to={"tel:+998 90 825 26 10"} className="es-contact-number">
                    +998 90 825 26 10
                  </Link>
                </div>
                <div className="es-contact">
                  <div className="es-contact-prop">Часы работы</div>
                  <div className="es-contact-value">
                    Понедельник — Пятница: 09:00-18:00
                  </div>
                </div>
                <div className="es-footer-socials">
                  <Link to={"/"} className="es-footer-ic">
                    <img src={facebookDark} alt='' />
                  </Link>
                  <Link to={"/"} className="es-footer-ic">
                    <img src={linkedin} alt='' />
                  </Link>
                  <Link to={"/"} className="es-footer-ic">
                    <img src={instagram} alt='' />
                  </Link>
                </div>
              </div>
              <img className="img-fluid sm-hide" src={contactMan} alt="" />
            </div>
            <div className="col-md-8">
              <div
                style={{ width: "100%", height: "100%", minHeight: "31.25rem" }}
              >
                <iframe
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Map"
                >
                  <Link to={"https://www.maps.ie/distance-area-calculator.html"}>
                    measure distance on map
                  </Link>
                </iframe>
              </div>
            </div>
          </div>
          <img
            className="img-fluid d-md-none es-mob-contact-img"
            src="img/contact-man.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Contacts;
