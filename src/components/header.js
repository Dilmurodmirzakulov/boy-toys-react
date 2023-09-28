import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="main-header fixed-top">
      <nav class="es-navbar">
        <div class="container">
          <div class="es-header">
            <div class="es-header-left sm-hide">
              <nav class="navbar-nav">
                <Link to={"/"} class="es-btn-light">На главную</Link>
              </nav>
            </div>
            <div class="es-header-center">
              <Link to={"/"} class="navbar-brand es-logo">
                <img src={require("../assets/img/logo.png")} alt="" />
              </Link>
            </div>
            <div class="es-header-right">
              <nav class="navbar-expand-lg">
                <ul class="navbar-nav navbar-icons sm-hide">
                  <li class="nav-item dropdown ml-auto">
                    <button class="btn dropdown-toggle es-language-dropdown" type="button" id="languageDropdown"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Рус
                    </button>
                    <div class="dropdown-menu es-dropdown-menu" aria-labelledby="languageDropdown">
                      <Link class="dropdown-item active">Рус</Link>
                      <Link class="dropdown-item">O'zb</Link>
                      <Link class="dropdown-item">Eng</Link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <Link to={"/"} class="nav-link">
                      <img src={require("../assets/img/ic_heart.svg")} alt="" />
                    </Link>
                  </li>
                  <li class="nav-item position-relative">
                    <Link to={"/"} class="nav-link">
                      <img src={require("img/ic_cart.svg")} alt="" />
                      <span class="badge badge-cart">1</span>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/"} class="nav-link" data-toggle="modal" data-target="#authModal">
                      <img src={require("../assets/img/ic_profile.svg")} alt="" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="es-mob-nav">
              <div class="dropdown es-lang-dropdown">
                <button class="btn dropdown-toggle es-language-dropdown" type="button" id="languageDropdown"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="img/ic_globe.svg" alt="" />
                </button>
                <div class="dropdown-menu es-dropdown-menu" aria-labelledby="languageDropdown">
                  <Link class="dropdown-item active">Рус</Link>
                  <Link class="dropdown-item">O'zb</Link>
                  <Link class="dropdown-item">Eng</Link>
                </div>
              </div>
              <Link class="es-favorites" to={"/"}>
                <img alt="" src={require("../assets/img/ic_heart.svg")} />
              </Link>
              <button class="btn es-hamburger" data-target="#menuModal" data-toggle="modal">
                <img alt="Menu" src={require("../assets/img/ic_hamburger.svg")} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;