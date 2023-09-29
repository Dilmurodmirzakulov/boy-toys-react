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
      <section class="carousel-section">
        <div class="main-carousel">
          <div
            class="carousel slide carousel-fade"
            data-ride="carousel"
            id="mainCarousel"
          >
            <ol class="carousel-indicators">
              <li data-target="#mainCarousel" data-slide-to="0" class=""></li>
              <li
                data-target="#mainCarousel"
                data-slide-to="1"
                class="active"
              ></li>
              <li data-target="#mainCarousel" data-slide-to="2" class=""></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="img-fluid w-100"
                  src={require("../assets/img/banner1.jpg")}
                  alt="Жизнь слишком коротка"
                />
                <div class="carousel-backdrop">
                  <div class="es-carousel-content container">
                    <div class="carousel-title">Игрушки для детей</div>
                    <div class="carousel-info">
                      Игрушки были частью жизни ребенка на протяжении веков,
                      обеспечивая бесконечные часы игры и воображения.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <button class="carousel-control-prev" data-slide="prev" data-target="#mainCarousel" type="button">
            <span><img src="img/ic_slider-left.svg"></span>
          </button>
          <button class="carousel-control-next" data-slide="next" data-target="#mainCarousel" type="button">
            <span><img src="img/ic_slider-right.svg"></span>
          </button>  */}
          </div>
        </div>
      </section>
      <section class="products-section">
        <div class="container">
          <h2 class="es-section-title">Новинки</h2>
          <Slider {...settings} class="es-products-slick">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </Slider>
        </div>
      </section>
      <section class="form-section">
        <div class="es-form-container">
          <div class="es-section-title">Оставьте заявку</div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="* Имя" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <ReactInputMask
                  class="form-control"
                  mask="+\9\98 (99) 999 99 99"
                  maskChar={null}
                  placeholder="Введите номер телефона"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <textarea
                  class="form-control"
                  placeholder="* Сообщение"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div class="col-12">
              <button class="btn es-btn-light w-50">Далее</button>
            </div>
          </div>
        </div>
      </section>
      <section class="products-slider">
        <div class="container">
          <h2 class="es-section-title">Скидки</h2>
          <Slider {...settings} class="es-products-slick">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </Slider>
        </div>
      </section>
      <section class="feedback-section">
        <div class="container">
          <h2 class="es-section-title">Отзывы наших клиентов</h2>
          <Slider {...settingsFeedback} class="es-feedback-slick">
            <div class="es-feedback-wrapper">
              <div class="es-feedback-item">
                <div class="es-feedback-ic">
                  <img src={require("../assets/img/ic_feedback2.png")} alt="feedback" />
                </div>
                <div class="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nulla magni blanditiis culpa, accusantium
                  voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div class="es-feedbacker">Mark Alvio Wiens</div>
              </div>
            </div>
            <div class="es-feedback-wrapper">
              <div class="es-feedback-item">
                <div class="es-feedback-ic">
                  <img src={require("../assets/img/ic_feedback2.png")} alt="feedback" />
                </div>
                <div class="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nulla magni blanditiis culpa, accusantium
                  voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div class="es-feedbacker">Mark Alvio Wiens</div>
              </div>
            </div>
            <div class="es-feedback-wrapper">
              <div class="es-feedback-item">
                <div class="es-feedback-ic">
                  <img src={require("../assets/img/ic_feedback2.png")} alt="feedback" />
                </div>
                <div class="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nulla magni blanditiis culpa, accusantium
                  voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div class="es-feedbacker">Mark Alvio Wiens</div>
              </div>
            </div>
            <div class="es-feedback-wrapper">
              <div class="es-feedback-item">
                <div class="es-feedback-ic">
                  <img src={require("../assets/img/ic_feedback2.png")} alt="feedback" />
                </div>
                <div class="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nulla magni blanditiis culpa, accusantium
                  voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div class="es-feedbacker">Mark Alvio Wiens</div>
              </div>
            </div>
            <div class="es-feedback-wrapper">
              <div class="es-feedback-item">
                <div class="es-feedback-ic">
                  <img src={require("../assets/img/ic_feedback2.png")} alt="feedback" />
                </div>
                <div class="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nulla magni blanditiis culpa, accusantium
                  voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div class="es-feedbacker">Mark Alvio Wiens</div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Home;
