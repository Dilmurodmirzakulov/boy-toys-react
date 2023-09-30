import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/slick.min.css";
import "./assets/css/style.css";
import "./assets/css/media.css";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "./pages";
import Cart from "./pages/cart";
import About from "./pages/about";
import Layout from "./layout/layout";
import NotFound from "./pages/404.js";
import Profile from "./pages/profile";
import Checkout from "./pages/checkout";
import Contacts from "./pages/contacts";
import Favorites from "./pages/favorites";
import Product from "./pages/product/[id]";
import PublicOffer from "./pages/publicOffer";
import AllProducts from "./pages/allProducts.js";
import OrderComplete from "./pages/orderComplete";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="public-offer" element={<PublicOffer />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="order-complete" element={<OrderComplete />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
