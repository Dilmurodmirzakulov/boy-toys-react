import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div class="mobile-nav d-lg-none">
      <ul class="nav">
        <li class="nav-item">
          <Link to={"/"} class="nav-link active">
            <img src={require("../../assets/img/ic_main_active.svg")} alt="" />
            <span class="menu-title">Главная</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/"} class="nav-link">
            <img src={require("../../assets/img/ic_menu_mini.svg")} alt="" />
            <span class="menu-title">Меню</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/"} class="nav-link">
            <img src={require("../../assets/img/ic_cart_mini.svg")} alt="" />
            <span class="badge badge-cart">1</span>
            <span class="menu-title">Корзина</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/"} class="nav-link" href="#">
            <img src={require("../../assets/img/ic_profile_mini.svg")} alt="" />
            <span class="menu-title">Профиль</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
