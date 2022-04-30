import React from "react";
import { Carousel } from "react-bootstrap";
import ideathon from "./icons/ideathon.jpeg";
import c6 from "./icons/c6.jpg";
import c1 from "./icons/c1.jpeg";
import c2 from "./icons/c2.jpeg";
import c3 from "./icons/c3.jpeg";
import c4 from "./icons/c4.jpeg";
import c5 from "./icons/c5.jpeg";
import iiclogo from "./icons/iiclogo.png";

function Carousel2() {
  return (
    <div>
      <Carousel variant="dark" className=" container c2">
        <Carousel.Item className="ca1">
          <img className="d-block w-100 ca1" src={c1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="ca1">
          <img className="d-block w-100 ca1" src={iiclogo} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="ca1">
          <img className="d-block w-100 ca1" src={c6} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className="ca1">
          <img className="d-block w-100 ca1" src={c2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className="ca1">
          <img className="d-block w-100 ca1" src={c3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className="ca1">
          <img className="d-block w-100 ca1" src={ideathon} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className="ca1">
          <img className="d-block w-100 ca1" src={c4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className="ca1">
          <img className="d-block w-100 ca1" src={c5} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel2;
