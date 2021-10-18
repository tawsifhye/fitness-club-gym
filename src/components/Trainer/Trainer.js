import React from "react";
import "./Trainer.css";
import trainer1pic from "../../images/trainer1.jpg";
import trainer2pic from "../../images/trainer2.jpg";
import trainer3pic from "../../images/trainer3.jpg";
import trainer_banner from "../../images/trainer-banner.jpg";

const Trainer = () => {
  return (
    <>
      <div className="container-fluid row mx-auto bg-dark">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-4 mb-5 mx-auto align-items-center">
          <div className="col">
            <h1 className="display-1 fw-bold text-white">
              Step Up Your <br />
              <span className="text-danger">Fiteness</span>
            </h1>
          </div>
          <div className="col">
            <img className="img-fluid" src={trainer_banner} alt="" />
          </div>
        </div>
      </div>
      <h1 className=" text-center text-success display-3 fw-bold p-2">
        Trainers
      </h1>
      <p className="text-center fs-5 fw-bold">
        Don’t give up on your dreams, or your dreams will give up on you.
      </p>
      <div className="container row mx-auto trainer-container text-white text-center">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 mx-auto">
          <div className="col">
            <div className="card  bg-dark border-dark p-1">
              <img
                src={trainer1pic}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title fw-bold">James Holmes</h3>
                <p className="fs-5">Aerobatics Trainer</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  bg-dark border-dark p-1">
              <img
                src={trainer2pic}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title fw-bold">Kelly Green</h3>
                <p className="fs-5">Yoga Trainer</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  bg-dark border-dark p-1">
              <img
                src={trainer3pic}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title fw-bold">Ben Smith</h3>
                <p className="fs-5">Cardio Trainer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trainer;
