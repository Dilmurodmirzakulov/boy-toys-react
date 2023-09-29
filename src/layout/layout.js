import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import MobileMap from "../components/Modals/MobileMap";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <MobileNav />
      <MobileMap />
      <Link to={"#top"} id="back-top">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6 12.542L11.1667 7.10866C10.525 6.46699 9.47499 6.46699 8.83333 7.10866L3.39999 12.542"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </>
  );
};

export default Layout;
