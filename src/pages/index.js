import React from "react";
import ReactInputMask from "react-input-mask";
import Slider from "react-slick";
import ProductItem from "../components/Product";

const Home = () => {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} btn slick-prev slick-arrow`}
        type="button"
        onClick={onClick}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0333 13.2797L5.68666 8.93306C5.17332 8.41973 5.17332 7.57973 5.68666 7.06639L10.0333 2.71973"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} btn slick-next slick-arrow`}
        type="button"
        onClick={onClick}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.96666 13.2797L10.3133 8.93306C10.8267 8.41973 10.8267 7.57973 10.3133 7.06639L5.96666 2.71973"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsFeedback = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main>
      <section className="carousel-section">
        <div className="main-carousel">
          <div
            className="carousel slide carousel-fade"
            data-ride="carousel"
            id="mainCarousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#mainCarousel"
                data-slide-to="0"
                className=""
              ></li>
              <li
                data-target="#mainCarousel"
                data-slide-to="1"
                className="active"
              ></li>
              <li
                data-target="#mainCarousel"
                data-slide-to="2"
                className=""
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="img-fluid w-100"
                  src={require("../assets/img/banner1.jpg")}
                  alt="Жизнь слишком коротка"
                />
                <div className="carousel-backdrop">
                  <div className="es-carousel-content container">
                    <div className="carousel-title">Игрушки для детей</div>
                    <div className="carousel-info">
                      Игрушки были частью жизни ребенка на протяжении веков,
                      обеспечивая бесконечные часы игры и воображения.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <button className="carousel-control-prev" data-slide="prev" data-target="#mainCarousel" type="button">
            <span><img src="img/ic_slider-left.svg"></span>
          </button>
          <button className="carousel-control-next" data-slide="next" data-target="#mainCarousel" type="button">
            <span><img src="img/ic_slider-right.svg"></span>
          </button>  */}
          </div>
        </div>
      </section>
      <section className="products-section">
        <div className="container">
          <h2 className="es-section-title">Новинки</h2>
          <Slider {...settings} className="es-products-slick">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </Slider>
        </div>
      </section>
      <section className="form-section">
        <div className="es-form-container">
          <div className="es-section-title">Оставьте заявку</div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="* Имя"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <ReactInputMask
                  className="form-control"
                  mask="+\9\98 (99) 999 99 99"
                  maskChar={null}
                  placeholder="Введите номер телефона"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="* Сообщение"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <button className="btn es-btn-light w-50">Далее</button>
            </div>
          </div>
        </div>
      </section>
      <section className="products-slider">
        <div className="container">
          <h2 className="es-section-title">Скидки</h2>
          <Slider {...settings} className="es-products-slick">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </Slider>
        </div>
      </section>
      <section className="feedback-section">
        <div className="container">
          <h2 className="es-section-title">Отзывы наших клиентов</h2>
          <Slider {...settingsFeedback} className="es-feedback-slick">
            <div className="es-feedback-wrapper">
              <div className="es-feedback-item">
                <div className="es-feedback-ic">
                  <img
                    src={require("../assets/img/ic_feedback2.png")}
                    alt="feedback"
                  />
                </div>
                <div className="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nulla magni blanditiis culpa, accusantium
                  voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div className="es-feedbacker">Mark Alvio Wiens</div>
              </div>
            </div>
            <div className="es-feedback-wrapper">
              <div className="es-feedback-item">
                <div className="es-feedback-ic">
                  <img
                    src={require("../assets/img/ic_feedback2.png")}
                    alt="feedback"
                  />
                </div>
                <div className="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nulla magni blanditiis culpa, accusantium
                  voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div className="es-feedbacker">Mark Alvio Wiens</div>
              </div>
            </div>
            <div className="es-feedback-wrapper">
              <div className="es-feedback-item">
                <div className="es-feedback-ic">
                  <img
                    src={require("../assets/img/ic_feedback2.png")}
                    alt="feedback"
                  />
                </div>
                <div className="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nulla magni blanditiis culpa, accusantium
                  voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div className="es-feedbacker">Mark Alvio Wiens</div>
              </div>
            </div>
            <div className="es-feedback-wrapper">
              <div className="es-feedback-item">
                <div className="es-feedback-ic">
                  <img
                    src={require("../assets/img/ic_feedback2.png")}
                    alt="feedback"
                  />
                </div>
                <div className="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nulla magni blanditiis culpa, accusantium
                  voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div className="es-feedbacker">Mark Alvio Wiens</div>
              </div>
            </div>
            <div className="es-feedback-wrapper">
              <div className="es-feedback-item">
                <div className="es-feedback-ic">
                  <img
                    src={require("../assets/img/ic_feedback2.png")}
                    alt="feedback"
                  />
                </div>
                <div className="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nulla magni blanditiis culpa, accusantium
                  voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div className="es-feedbacker">Mark Alvio Wiens</div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Home;
