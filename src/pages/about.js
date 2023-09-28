import React from 'react'

const About = () => {
  return (
   <main>
    <section class="es-bg-dark">
      <div class="es-about-page-row">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="es-comp-main-content">
                <h1 class="ec-page-title">Boy Toys</h1>
                <div class="ec-page-desc">Успешная компания в сфере дистрибуции товаров народного потребления
                  с 1998 года.</div>
              </div>
            </div>
            <div class="col-md-6 sm-hide"></div>
          </div>
        </div>
        <div class="es-full-right-half">
          <img src={require("../assets/img/about.jpg")} class="img-fluid" loading="lazy" alt='' />
        </div>
      </div>
    </section>
  </main>
  )
}

export default About;