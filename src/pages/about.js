import React from "react";
import about from "../assets/img/about.jpg";
const About = () => {
  return (
    <>
      <section className="es-bg-dark">
        <div className="es-about-page-row">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="es-comp-main-content">
                  <h1 className="ec-page-title">Boy Toys</h1>
                  <div className="ec-page-desc">
                    Успешная компания в сфере дистрибуции товаров народного
                    потребления с 1998 года.
                  </div>
                </div>
              </div>
              <div className="col-md-6 sm-hide"></div>
            </div>
          </div>
          <div className="es-full-right-half">
            <img src={about} className="img-fluid" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
