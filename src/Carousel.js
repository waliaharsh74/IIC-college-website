import React from "react";
import "./Carousel.css";
import ideathon from "./icons/ideathon.jpeg";
import iiclogo from "./icons/iic-logo.jpg";
import pitchingevent from "./icons/pitching-event.jpeg";
function Carousel() {
  return (
    <div className="container c2 ">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active ca1 ">
            <img src={ideathon} className="d-block w-100 ca1 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Pitching Event</h5>
            </div>
          </div>
          <div className="carousel-item ca1">
            <img src={iiclogo} className="d-block w-100 ca1 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>ideathon</h5>
            </div>
          </div>
          <div className="carousel-item ca1">
            <img src={pitchingevent} className="d-block w-100 ca1" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Pitch a Thought</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
