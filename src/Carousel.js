import React from "react";
import "./Carousel.css";
import ideathon from "./icons/ideathon.jpeg";
import c6 from "./icons/c6.jpg";
import c1 from "./icons/c1.jpeg";
import c2 from "./icons/c2.jpeg";
import c3 from "./icons/c3.jpeg";
import c4 from "./icons/c4.jpeg";
import c5 from "./icons/c5.jpeg";
import iiclogo from "./icons/iiclogo.png";
// import c from "./icons/c.jpeg";
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
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active ca1 ">
            <img src={c1} className="d-block w-100 ca1 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>E-Summit Meeting</h5>
            </div>
          </div>
          <div className="carousel-item ca1">
            <img src={iiclogo} className="d-block w-100 ca1 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>IIC logo</h5>
            </div>
          </div>
          <div className="carousel-item ca1">
            <img src={c6} className="d-block w-100 ca1 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Pitching Event </h5>
            </div>
          </div>
          <div className="carousel-item ca1">
            <img src={c3} className="d-block w-100 ca1" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Pitch a Thought</h5>
            </div>
          </div>
          <div className="carousel-item ca1">
            <img src={c2} className="d-block w-100 ca1" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Ideathon</h5>
            </div>
          </div>
          <div className="carousel-item ca1">
            <img src={ideathon} className="d-block w-100 ca1" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Award Ceremony</h5>
            </div>
          </div>
          <div className="carousel-item ca1">
            <img src={c4} className="d-block w-100 ca1" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>webinar on startup</h5>
            </div>
          </div>
          <div className="carousel-item ca1">
            <img src={c5} className="d-block w-100 ca1" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>IIC media</h5>
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
