import React from "react";
import logo from "../assets/img/logo.png";
import heart from "../assets/img/ic_heart.svg";
import cart from "../assets/img/ic_cart.svg";
import profile from "../assets/img/ic_profile.svg";
import globe from "../assets/img/ic_globe.svg";
import hamburger from "../assets/img/ic_hamburger.svg";
import { Link } from "react-router-dom";
import { Badge, Button, Dropdown, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showMenuModal } from "../store/actions/modalsAction";
import { showAuthModal } from "../store/actions/modalsAction";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="main-header fixed-top">
      <Nav className="es-navbar">
        <div className="container">
          <div className="es-header">
            <div className="es-header-left sm-hide">
              <nav className="navbar-nav">
                {/* <a href="#" className="es-btn-light">
                    На главную
                  </a> */}

                <Link to="/" className="es-btn-light">
                  На главную
                </Link>
              </nav>
            </div>
            <div className="es-header-center">
              <Link to="/" className="navbar-brand es-logo">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="es-header-right">
              <Nav className="navbar-expand-lg">
                <ul className="navbar-nav navbar-icons sm-hide">
                  <li className="nav-item dropdown ml-auto">
                    <Dropdown as={Nav.Item} alignright>
                      <Dropdown.Toggle variant="light" id="languageDropdown">
                        Рус
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item active>Рус</Dropdown.Item>
                        <Dropdown.Item>O'zb</Dropdown.Item>
                        <Dropdown.Item>Eng</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="nav-item">
                    <Nav.Item>
                      <Nav.Link href="#">
                        <img src={heart} alt="" />
                      </Nav.Link>
                    </Nav.Item>
                  </li>
                  <li className="nav-item position-relative">
                    <Nav.Item>
                      <Nav.Link href="#">
                        <img src={cart} alt="" />
                        <Badge className="badge-cart">1</Badge>
                      </Nav.Link>
                    </Nav.Item>
                  </li>
                  <li className="nav-item">
                    <Nav.Item>
                      <Nav.Link
                        href="#"
                        data-toggle="modal"
                        data-target="#authModal"
                        onClick={() => dispatch(showAuthModal())}
                      >
                        <img src={profile} alt="" />
                      </Nav.Link>
                    </Nav.Item>
                  </li>
                </ul>
              </Nav>
            </div>
            <div className="es-mob-nav">
              <Dropdown as="div" className="es-lang-dropdown">
                <Dropdown.Toggle variant="light" id="languageDropdown">
                  <img src={globe} alt="" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item active>Рус</Dropdown.Item>
                  <Dropdown.Item>O'zb</Dropdown.Item>
                  <Dropdown.Item>Eng</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <a className="es-favorites" href="#">
                <img alt="" src={heart} />
              </a>
              <Button
                variant="light"
                className="es-hamburger"
                data-target="#menuModal"
                data-toggle="modal"
                onClick={() => dispatch(showMenuModal())}
              >
                <img alt="Menu" src={hamburger} />
              </Button>
            </div>
          </div>
        </div>
      </Nav>
    </header>
  );
};

export default Header;
