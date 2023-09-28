import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import MenuModal from '../components/modals/menuModal';
import MobileNav from '../components/modals/mobileNav';

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <MenuModal />
      <MobileNav />
      <Footer />
      <Link to={"#top"} id="back-top">
        <img alt="To Top" src={require("../assets/img/ic_top.svg")} />
      </Link>
    </>
  )
}

export default Layout;