// import React from "react";
import logo from "../assets/img/logo.png";

import locationLogo from "../assets/img/ic_location.svg";
import facebook from "../assets/img/ic_facebook.svg";
import linkedin from "../assets/img/ic_linkedin.svg";
import instagram from "../assets/img/ic_instagram.svg";
// const Footer = () => {
//   return (
//     <>
//       {" \n"}
//       <footer>
//         <div className="container">
//           <div className="es-footer-container">
//             <div className="es-footer-group">
//               <img className="footer-logo" src={logo} alt="" />
//               <div className="es-footer-desc">
//                 Игрушки были частью жизни ребенка на протяжении веков,
//                 обеспечивая бесконечные часы игры и воображения
//               </div>
//             </div>
//             <div className="es-footer-group">
//               <ul className="nav flex-column">
//                 <li className="nav-item">
//                   <a href="#" className="nav-link">
//                     Меню
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="#" className="nav-link">
//                     Контакты
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="#" className="nav-link">
//                     О нас
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="#" className="nav-link">
//                     Публичная офетра
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="text-lg-right">
//               <div className="es-phone-label">Телефон</div>
//               <div className="es-phone">
//                 <a href="tel:+998 78 150 33 80">
//                   +998 78 <span className="es-text-blue">150 33 80</span>
//                 </a>
//               </div>
//               <div className="es-footer-info">
//                 <div>
//                   Адрес: ул. Богибустон, 248, <br /> Tashkent 100121
//                 </div>
//                 <div className="es-footer-ic">
//                   <img src={locationLogo} alt="" />
//                 </div>
//               </div>
//               <div className="es-footer-socials">
//                 <a href="" className="es-footer-ic">
//                   <img src={facebook} />
//                 </a>
//                 <a className="es-footer-ic" href="">
//                   <img src={linkedin} />
//                 </a>
//                 <a className="es-footer-ic" href="">
//                   <img src={instagram} />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="es-footer-bottom">
//             <div className="es-footer-copyright">2023 © BoyToys.uz</div>
//             <div className="es-footer-developer">
//               Сайт разработан в <a href="https://zetta.uz">Zetta Online</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import logo from "./path/to/your/logo.png"; // Logo rasmini kerakli manzilga o'zgartiring
// import locationLogo from "./path/to/your/locationLogo.png"; // Location logo rasmini kerakli manzilga o'zgartiring
// import facebook from "./path/to/your/facebook.png"; // Facebook rasmini kerakli manzilga o'zgartiring
// import linkedin from "./path/to/your/linkedin.png"; // LinkedIn rasmini kerakli manzilga o'zgartiring
// import instagram from "./path/to/your/instagram.png"; // Instagram rasmini kerakli manzilga o'zgartiring

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="es-footer-container">
          <Col md={6} lg={4} className="es-footer-group">
            <img className="footer-logo" src={logo} alt="" />
            <div className="es-footer-desc">
              Игрушки были частью жизни ребенка на протяжении веков, обеспечивая
              бесконечные часы игры и воображения
            </div>
          </Col>
          <Col md={6} lg={4} className="es-footer-group">
            <ul className="nav flex-column " style={{ alignItems: "center" }}>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Меню
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Контакты
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  О нас
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Публичная офетра
                </a>
              </li>
            </ul>
          </Col>
          <Col md={12} lg={4} className="text-lg-right">
            <div className="es-phone-label">Телефон</div>
            <div className="es-phone">
              <a href="tel:+998 78 150 33 80">
                +998 78 <span className="es-text-blue">150 33 80</span>
              </a>
            </div>
            <div
              className="es-footer-info"
              style={{ justifyContent: "flex-end" }}
            >
              <div>
                Адрес: ул. Богибустон, 248, <br /> Tashkent 100121
              </div>
              <div className="es-footer-ic">
                <img src={locationLogo} alt="" />
              </div>
            </div>
            <div className="es-footer-socials">
              <a href="" className="es-footer-ic">
                <img src={facebook} alt="Facebook" />
              </a>
              <a className="es-footer-ic" href="">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a className="es-footer-ic" href="">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="es-footer-bottom">
              <div className="es-footer-copyright">2023 © BoyToys.uz</div>
              <div className="es-footer-developer">
                Сайт разработан в <a href="https://zetta.uz">Zetta Online</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
