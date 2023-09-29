import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../assets/img/404.png";

const NotFound = () => {
  return (
    <>
      <section className="es-page-section">
        <Container className="container">
          <div className="es-404-content">
            <h2 className="es-page-title">Страница не найдена.</h2>
            <div className="es-404-img">
              <Image src={img} className="img-fluid" alt="404" />
            </div>

            <Link to={"/"}>
              <Button className="btn es-order-btn mx-auto">На главную</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
