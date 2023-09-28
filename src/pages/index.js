import React from 'react'

const Index = () => {
  return (
    <main>
      <section class="carousel-section">
        <div class="main-carousel">
          <div class="carousel slide carousel-fade" data-ride="carousel" id="mainCarousel">
            <ol class="carousel-indicators">
              <li data-target="#mainCarousel" data-slide-to="0" class=""></li>
              <li data-target="#mainCarousel" data-slide-to="1" class="active"></li>
              <li data-target="#mainCarousel" data-slide-to="2" class=""></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="img-fluid w-100" src="img/banner1.jpg" alt="Жизнь слишком коротка" />
                <div class="carousel-backdrop">
                  <div class="es-carousel-content container">
                    <div class="carousel-title">Игрушки для детей</div>
                    <div class="carousel-info">Игрушки были частью жизни ребенка на протяжении веков, обеспечивая
                      бесконечные часы игры и воображения.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <button class="carousel-control-prev" data-slide="prev" data-target="#mainCarousel" type="button">
              <span><img src="img/ic_slider-left.svg" /></span>
            </button>
            <button class="carousel-control-next" data-slide="next" data-target="#mainCarousel" type="button">
              <span><img src="img/ic_slider-right.svg" /></span>
            </button> */}
          </div>
        </div>
      </section>
      <section class="products-section">
        <div class="container">
          <h2 class="es-section-title">Новинки</h2>
          <div class="es-products-slick">
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">
                  new
                </div>
                <div class="es-product-img">
                  <a href="#">
                    <img src="img/product_1.jpg" class="img-fluid" alt="" />
                    <button class="btn es-product-like">
                      <img src="img/ic_pr-like.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="es-product-title">
                  <a href="#">McLaren GT Ride-On</a>
                </div>
                <div class="es-product-info">
                  Этот автомобиль для езды наверняка подарит часы веселья и удовольствия.
                </div>
                <div class="es-product-options">
                  <div class="es-pruduct-price">
                    <div class="es-curr-price">250 000 сум</div>
                    <div class="es-old-price">300 000 сум</div>
                  </div>
                  <div class="es-product-controls">
                    <button class="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                    <span class="es-product-quantity">1</span>
                    <button class="btn btn-counter btn-plus" data-action="plus-quantity">+</button>
                  </div>
                  <button class="btn btn-cart d-none" data-action="add-to-cart">
                    <img src="img/ic_cart.svg" />
                  </button>
                </div>
              </div>
            </div>
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">
                  new
                </div>
                <div class="es-product-img">
                  <a href="#">
                    <img src="img/product_1.jpg" class="img-fluid" alt="" />
                    <button class="btn es-product-like">
                      <img src="img/ic_pr-like.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="es-product-title">
                  <a href="#">McLaren GT Ride-On</a>
                </div>
                <div class="es-product-info">
                  Этот автомобиль для езды наверняка подарит часы веселья и удовольствия.
                </div>
                <div class="es-product-options">
                  <div class="es-pruduct-price">
                    <div class="es-curr-price">250 000 сум</div>
                    <div class="es-old-price">300 000 сум</div>
                  </div>
                  <div class="es-product-controls">
                    <button class="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                    <span class="es-product-quantity">1</span>
                    <button class="btn btn-counter btn-plus" data-action="plus-quantity">+</button>
                  </div>
                  <button class="btn btn-cart d-none" data-action="add-to-cart">
                    <img src="img/ic_cart.svg" />
                  </button>
                </div>
              </div>
            </div>
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">
                  new
                </div>
                <div class="es-product-img">
                  <a href="#">
                    <img src="img/product_1.jpg" class="img-fluid" alt="" />
                    <button class="btn es-product-like">
                      <img src="img/ic_pr-like.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="es-product-title">
                  <a href="#">McLaren GT Ride-On</a>
                </div>
                <div class="es-product-info">
                  Этот автомобиль для езды наверняка подарит часы веселья и удовольствия.
                </div>
                <div class="es-product-options">
                  <div class="es-pruduct-price">
                    <div class="es-curr-price">250 000 сум</div>
                    <div class="es-old-price">300 000 сум</div>
                  </div>
                  <div class="es-product-controls">
                    <button class="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                    <span class="es-product-quantity">1</span>
                    <button class="btn btn-counter btn-plus" data-action="plus-quantity">+</button>
                  </div>
                  <button class="btn btn-cart d-none" data-action="add-to-cart">
                    <img src="img/ic_cart.svg" />
                  </button>
                </div>
              </div>
            </div>
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">
                  new
                </div>
                <div class="es-product-img">
                  <a href="#">
                    <img src="img/product_1.jpg" class="img-fluid" alt="" />
                    <button class="btn es-product-like">
                      <img src="img/ic_pr-like.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="es-product-title">
                  <a href="#">McLaren GT Ride-On</a>
                </div>
                <div class="es-product-info">
                  Этот автомобиль для езды наверняка подарит часы веселья и удовольствия.
                </div>
                <div class="es-product-options">
                  <div class="es-pruduct-price">
                    <div class="es-curr-price">250 000 сум</div>
                    <div class="es-old-price">300 000 сум</div>
                  </div>
                  <div class="es-product-controls">
                    <button class="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                    <span class="es-product-quantity">1</span>
                    <button class="btn btn-counter btn-plus" data-action="plus-quantity">+</button>
                  </div>
                  <button class="btn btn-cart d-none" data-action="add-to-cart">
                    <img src="img/ic_cart.svg" />
                  </button>
                </div>
              </div>
            </div>
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">
                  new
                </div>
                <div class="es-product-img">
                  <a href="#">
                    <img src="img/product_1.jpg" class="img-fluid" alt="" />
                    <button class="btn es-product-like">
                      <img src="img/ic_pr-like.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="es-product-title">
                  <a href="#">McLaren GT Ride-On</a>
                </div>
                <div class="es-product-info">
                  Этот автомобиль для езды наверняка подарит часы веселья и удовольствия.
                </div>
                <div class="es-product-options">
                  <div class="es-pruduct-price">
                    <div class="es-curr-price">250 000 сум</div>
                    <div class="es-old-price">300 000 сум</div>
                  </div>
                  <div class="es-product-controls">
                    <button class="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                    <span class="es-product-quantity">1</span>
                    <button class="btn btn-counter btn-plus" data-action="plus-quantity">+</button>
                  </div>
                  <button class="btn btn-cart d-none" data-action="add-to-cart">
                    <img src="img/ic_cart.svg" />
                  </button>
                </div>
              </div>
            </div>
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">
                  new
                </div>
                <div class="es-product-img">
                  <a href="#">
                    <img src="img/product_1.jpg" class="img-fluid" alt="" />
                    <button class="btn es-product-like">
                      <img src="img/ic_pr-like.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="es-product-title">
                  <a href="#">McLaren GT Ride-On</a>
                </div>
                <div class="es-product-info">
                  Этот автомобиль для езды наверняка подарит часы веселья и удовольствия.
                </div>
                <div class="es-product-options">
                  <div class="es-pruduct-price">
                    <div class="es-curr-price">250 000 сум</div>
                    <div class="es-old-price">300 000 сум</div>
                  </div>
                  <div class="es-product-controls">
                    <button class="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                    <span class="es-product-quantity">1</span>
                    <button class="btn btn-counter btn-plus" data-action="plus-quantity">+</button>
                  </div>
                  <button class="btn btn-cart d-none" data-action="add-to-cart">
                    <img src="img/ic_cart.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
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
                <input type="text" class="form-control" placeholder="* Номер телефона" data-plugin="phone-mask" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <textarea class="form-control" placeholder="* Сообщение" rows="4"></textarea>
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
          <div class="es-products-slick">
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">
                  new
                </div>
                <div class="es-product-img">
                  <a href="#">
                    <img src="img/product_1.jpg" class="img-fluid" alt="" />
                    <button class="btn es-product-like">
                      <img src="img/ic_pr-like.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="es-product-title">
                  <a href="#">McLaren GT Ride-On</a>
                </div>
                <div class="es-product-info">
                  Этот автомобиль для езды наверняка подарит часы веселья и удовольствия.
                </div>
                <div class="es-product-options">
                  <div class="es-pruduct-price">
                    <div class="es-curr-price">250 000 сум</div>
                    <div class="es-old-price">300 000 сум</div>
                  </div>
                  <div class="es-product-controls">
                    <button class="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                    <span class="es-product-quantity">1</span>
                    <button class="btn btn-counter btn-plus" data-action="plus-quantity">+</button>
                  </div>
                  <button class="btn btn-cart d-none" data-action="add-to-cart">
                    <img src="img/ic_cart.svg" />
                  </button>
                </div>
              </div>
            </div>
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">
                  new
                </div>
                <div class="es-product-img">
                  <a href="#">
                    <img src="img/product_1.jpg" class="img-fluid" alt="" />
                    <button class="btn es-product-like">
                      <img src="img/ic_pr-like.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="es-product-title">
                  <a href="#">McLaren GT Ride-On</a>
                </div>
                <div class="es-product-info">
                  Этот автомобиль для езды наверняка подарит часы веселья и удовольствия.
                </div>
                <div class="es-product-options">
                  <div class="es-pruduct-price">
                    <div class="es-curr-price">250 000 сум</div>
                    <div class="es-old-price">300 000 сум</div>
                  </div>
                  <div class="es-product-controls">
                    <button class="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                    <span class="es-product-quantity">1</span>
                    <button class="btn btn-counter btn-plus" data-action="plus-quantity">+</button>
                  </div>
                  <button class="btn btn-cart d-none" data-action="add-to-cart">
                    <img src="img/ic_cart.svg" />
                  </button>
                </div>
              </div>
            </div>
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">
                  new
                </div>
                <div class="es-product-img">
                  <a href="#">
                    <img src="img/product_1.jpg" class="img-fluid" alt="" />
                    <button class="btn es-product-like">
                      <img src="img/ic_pr-like.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="es-product-title">
                  <a href="#">McLaren GT Ride-On</a>
                </div>
                <div class="es-product-info">
                  Этот автомобиль для езды наверняка подарит часы веселья и удовольствия.
                </div>
                <div class="es-product-options">
                  <div class="es-pruduct-price">
                    <div class="es-curr-price">250 000 сум</div>
                    <div class="es-old-price">300 000 сум</div>
                  </div>
                  <div class="es-product-controls">
                    <button class="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                    <span class="es-product-quantity">1</span>
                    <button class="btn btn-counter btn-plus" data-action="plus-quantity">+</button>
                  </div>
                  <button class="btn btn-cart d-none" data-action="add-to-cart">
                    <img src="img/ic_cart.svg" />
                  </button>
                </div>
              </div>
            </div>
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">
                  new
                </div>
                <div class="es-product-img">
                  <a href="#">
                    <img src="img/product_1.jpg" class="img-fluid" alt="" />
                    <button class="btn es-product-like">
                      <img src="img/ic_pr-like.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="es-product-title">
                  <a href="#">McLaren GT Ride-On</a>
                </div>
                <div class="es-product-info">
                  Этот автомобиль для езды наверняка подарит часы веселья и удовольствия.
                </div>
                <div class="es-product-options">
                  <div class="es-pruduct-price">
                    <div class="es-curr-price">250 000 сум</div>
                    <div class="es-old-price">300 000 сум</div>
                  </div>
                  <div class="es-product-controls">
                    <button class="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                    <span class="es-product-quantity">1</span>
                    <button class="btn btn-counter btn-plus" data-action="plus-quantity">+</button>
                  </div>
                  <button class="btn btn-cart d-none" data-action="add-to-cart">
                    <img src="img/ic_cart.svg" />
                  </button>
                </div>
              </div>
            </div>
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">
                  new
                </div>
                <div class="es-product-img">
                  <a href="#">
                    <img src="img/product_1.jpg" class="img-fluid" alt="" />
                    <button class="btn es-product-like">
                      <img src="img/ic_pr-like.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="es-product-title">
                  <a href="#">McLaren GT Ride-On</a>
                </div>
                <div class="es-product-info">
                  Этот автомобиль для езды наверняка подарит часы веселья и удовольствия.
                </div>
                <div class="es-product-options">
                  <div class="es-pruduct-price">
                    <div class="es-curr-price">250 000 сум</div>
                    <div class="es-old-price">300 000 сум</div>
                  </div>
                  <div class="es-product-controls">
                    <button class="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                    <span class="es-product-quantity">1</span>
                    <button class="btn btn-counter btn-plus" data-action="plus-quantity">+</button>
                  </div>
                  <button class="btn btn-cart d-none" data-action="add-to-cart">
                    <img src="img/ic_cart.svg" />
                  </button>
                </div>
              </div>
            </div>
            <div class="es-product-wrapper">
              <div class="es-product-item">
                <div class="es-product-flag">
                  new
                </div>
                <div class="es-product-img">
                  <a href="#">
                    <img src="img/product_1.jpg" class="img-fluid" alt="" />
                    <button class="btn es-product-like">
                      <img src="img/ic_pr-like.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="es-product-title">
                  <a href="#">McLaren GT Ride-On</a>
                </div>
                <div class="es-product-info">
                  Этот автомобиль для езды наверняка подарит часы веселья и удовольствия.
                </div>
                <div class="es-product-options">
                  <div class="es-pruduct-price">
                    <div class="es-curr-price">250 000 сум</div>
                    <div class="es-old-price">300 000 сум</div>
                  </div>
                  <div class="es-product-controls">
                    <button class="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                    <span class="es-product-quantity">1</span>
                    <button class="btn btn-counter btn-plus" data-action="plus-quantity">+</button>
                  </div>
                  <button class="btn btn-cart d-none" data-action="add-to-cart">
                    <img src="img/ic_cart.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="feedback-section">
        <div class="container">
          <h2 class="es-section-title">Отзывы наших клиентов</h2>
          <div class="es-feedback-slick">
            <div class="es-feedback-wrapper">
              <div class="es-feedback-item">
                <div class="es-feedback-ic">
                  <img src="img/ic_feedback2.png" alt="feedback" />
                </div>
                <div class="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nulla magni blanditiis culpa,
                  accusantium voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div class="es-feedbacker">
                  Mark Alvio Wiens
                </div>
              </div>
            </div>
            <div class="es-feedback-wrapper">
              <div class="es-feedback-item">
                <div class="es-feedback-ic">
                  <img src="img/ic_feedback2.png" alt="feedback" />
                </div>
                <div class="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nulla magni blanditiis culpa,
                  accusantium voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div class="es-feedbacker">
                  Mark Alvio Wiens
                </div>
              </div>
            </div>
            <div class="es-feedback-wrapper">
              <div class="es-feedback-item">
                <div class="es-feedback-ic">
                  <img src="img/ic_feedback2.png" alt="feedback" />
                </div>
                <div class="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nulla magni blanditiis culpa,
                  accusantium voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div class="es-feedbacker">
                  Mark Alvio Wiens
                </div>
              </div>
            </div>
            <div class="es-feedback-wrapper">
              <div class="es-feedback-item">
                <div class="es-feedback-ic">
                  <img src="img/ic_feedback2.png" alt="feedback" />
                </div>
                <div class="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nulla magni blanditiis culpa,
                  accusantium voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div class="es-feedbacker">
                  Mark Alvio Wiens
                </div>
              </div>
            </div>
            <div class="es-feedback-wrapper">
              <div class="es-feedback-item">
                <div class="es-feedback-ic">
                  <img src="img/ic_feedback2.png" alt="feedback" />
                </div>
                <div class="es-feedback-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nulla magni blanditiis culpa,
                  accusantium voluptatum delectus facere assumenda nobis quo distinctio
                </div>
                <div class="es-feedbacker">
                  Mark Alvio Wiens
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Index