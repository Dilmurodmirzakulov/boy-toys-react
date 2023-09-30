import React from "react";
import cart from "../assets/img/ic_cart.svg";
import heart from "../assets/img/ic_heart.svg";
import globe from "../assets/img/ic_globe.svg";
import profile from "../assets/img/ic_profile.svg";
import hamburger from "../assets/img/ic_hamburger.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Dropdown, DropdownToggle } from "react-bootstrap";
import { showMenuModal } from "../store/actions/modalsAction";
import { showAuthModal } from "../store/actions/modalsAction";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <header class="main-header fixed-top">
      <nav class="es-navbar">
        <div class="container">
          <div class="es-header">
            <div class="es-header-left sm-hide">
              <nav class="navbar-nav">
                <Link to={"/"} class="es-btn-light">
                  На главную
                </Link>
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
                  <Dropdown class="nav-item dropdown ml-auto">
                    <DropdownToggle
                      class="btn dropdown-toggle es-language-dropdown"
                      type="button"
                      id="languageDropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Рус
                    </DropdownToggle>
                    <Dropdown.Menu
                      class="dropdown-menu"
                      aria-labelledby="languageDropdown"
                    >
                      <Dropdown.Item class="dropdown-item active" href="#">
                        Рус
                      </Dropdown.Item>
                      <Dropdown.Item class="dropdown-item" href="#">
                        O'zb
                      </Dropdown.Item>
                      <Dropdown.Item class="dropdown-item" href="#">
                        Eng
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <li class="nav-item">
                    <Link to={"/favorites"} class="nav-link">
                      <img src={heart} alt="" />
                    </Link>
                  </li>
                  <li class="nav-item position-relative">
                    <Link to={"/cart"} class="nav-link">
                      <img src={cart} alt="" />
                      <span class="badge badge-cart">1</span>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to={"/profile"}
                      class="nav-link"
                      data-toggle="modal"
                      data-target="#authModal"
                      onClick={() => dispatch(showAuthModal())}
                    >
                      <img src={profile} alt="" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="es-mob-nav">
              <Dropdown class="dropdown es-lang-dropdown">
                <Dropdown.Toggle
                  class="btn dropdown-toggle es-language-dropdown"
                  type="button"
                  id="languageDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={globe} alt="" />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  class="dropdown-menu es-dropdown-menu"
                  aria-labelledby="languageDropdown"
                >
                  <Dropdown.Item class="dropdown-item active" href="#">
                    Рус
                  </Dropdown.Item>
                  <Dropdown.Item class="dropdown-item" href="#">
                    O'zb
                  </Dropdown.Item>
                  <Dropdown.Item class="dropdown-item" href="#">
                    Eng
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link to={"/favorites"} class="es-favorites">
                <img alt="" src={heart} />
              </Link>
              <button
                class="btn es-hamburger"
                data-target="#menuModal"
                data-toggle="modal"
                onClick={() => dispatch(showMenuModal())}
              >
                <img alt="Menu" src={hamburger} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
