import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import bannerImg from "../../images/banner-img.jpg";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <div>
      <h1 className=" text-center display-3 fw-bold p-2">
        Welcome to <span className="text-primary">Fitness Club</span>
      </h1>
      <p className="text-center fs-5 fw-bold">
        Don’t give up on your dreams, or your dreams will give up on you.
      </p>
      <div className="container">
        <div className="row align-items-center justify-content-center py-3">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img className="img-fluid rounded-circle" src={bannerImg} alt="" />
          </div>
          <div className="col-lg-6 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
            <p className="fs-1">Elite Personal Training Services</p>
            <h1 className="display-1 fw-bold">
              MAKE IT <span className="text-danger">SHAPE</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="display-3 fw-bold">
          Our <span className="text-primary">Program</span>
        </h1>
        <p className="p-3 fs-5 mx-auto">
          Our fitness experts can help you discover new training techniques and
          exercises that offer a dynamic and efficient full-body workout.
        </p>
      </div>
      <div className="container-fluid row mx-auto service-container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 mb-5 mx-auto">
          {services.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
