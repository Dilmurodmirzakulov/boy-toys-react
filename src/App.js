import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/slick.min.css";
import "./assets/css/style.css";
import "./assets/css/media.css";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages";
import Product from "./pages/product/[id]";
import About from "./pages/about";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Contacts from "./pages/contacts";
import Favorites from "./pages/favorites";
import OrderComplete from "./pages/orderComplete";
import Profile from "./pages/profile";
import PublicOffer from "./pages/publicOffer";
import NotFound from "./pages/404.js";
import AllProducts from "./pages/allProducts.js";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="order-complete" element={<OrderComplete />} />
          <Route path="profile" element={<Profile />} />
          <Route path="public-offer" element={<PublicOffer />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
