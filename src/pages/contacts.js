import React from "react";
import contact from "../assets/img/contact.jpg";
import facebookDark from "../assets/img/ic_facebook-dark.svg";
import linkedin from "../assets/img/ic_linkedin-dark.svg";
import instagram from "../assets/img/ic_instagram-dark.svg";
import contactMan from "../assets/img/contact-man.png";
import { Link } from "react-router-dom";
const Contacts = () => {
  return (
    <>
      <section class="es-bg-dark">
        <div class="es-about-page-row">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="es-comp-main-content">
                  <h1 class="ec-team-title">Контакты</h1>
                  <nav aria-label="breadcrumb" class="ec-breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <Link to={"/"}>Главная</Link>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Контакты
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div class="col-md-6 sm-hide"></div>
            </div>
          </div>
          <div class="es-full-right-half">
            <img src={contact} class="img-fluid" loading="lazy" />
          </div>
        </div>
      </section>
      <section class="es-contacts-section">
        <div class="container">
          <h2 class="ec-section-title">Контакты</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="es-contact-content">
                <div class="es-contact">
                  <div class="es-contact-prop">Адрес</div>
                  <div class="es-contact-value">
                    ул. Богибустон, 248, Tashkent 100121
                  </div>
                </div>
                <div class="es-contact">
                  <div class="es-contact-prop">Телефон</div>
                  <a href="tel:+998 78 150 33 80" class="es-contact-number">
                    +998 78 150 33 80
                  </a>
                </div>
                <div class="es-contact">
                  <div class="es-contact-prop">Телефон доставки</div>
                  <a href="tel:+998 90 825 26 10" class="es-contact-number">
                    +998 90 825 26 10
                  </a>
                </div>
                <div class="es-contact">
                  <div class="es-contact-prop">Часы работы</div>
                  <div class="es-contact-value">
                    Понедельник — Пятница: 09:00-18:00
                  </div>
                </div>
                <div class="es-footer-socials">
                  <a href="" class="es-footer-ic">
                    <img src={facebookDark} />
                  </a>
                  <a class="es-footer-ic" href="">
                    <img src={linkedin} />
                  </a>
                  <a class="es-footer-ic" href="">
                    <img src={instagram} />
                  </a>
                </div>
              </div>
              <img class="img-fluid sm-hide" src={contactMan} alt="" />
            </div>
            <div class="col-md-8">
              <div
                style={{ width: "100%", height: "100%", minHeight: "31.25rem" }}
              >
                <iframe
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  title="Map"
                >
                  <a href="https://www.maps.ie/distance-area-calculator.html">
                    measure distance on map
                  </a>
                </iframe>
              </div>
            </div>
          </div>
          <img
            class="img-fluid d-md-none es-mob-contact-img"
            src="img/contact-man.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Contacts;
