import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMailBulk,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
const Contact = () => {
  const mailIcon = <FontAwesomeIcon icon={faMailBulk} />;
  const locationIcon = <FontAwesomeIcon icon={faSearchLocation} />;
  const clockIcon = <FontAwesomeIcon icon={faClock} />;
  const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
  const pinteresIcon = <FontAwesomeIcon icon={faPinterest} />;
  return (
    <>
      <div className="contact-banner-container">
        <div className=" container-fluid text-white contact-banner text-center ">
          <div className="">
            <h1 className="fw-bold">Contact Us</h1>
            <p className="fw-bold">Get in touch with us!</p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className=" row  align-items-center bg-white py-4">
          <div className="row col-lg-4 col-md-4 col-sm-12  justify-content-center text-center mx-auto ">
            <h1 className="display-2">{mailIcon}</h1>
            <p className="">fitnessclub@xyz.com</p>
          </div>
          <div className="row col-lg-4 col-md-4 col-sm-12 justify-content-center text-center mx-auto ">
            <h1 className="display-2">{locationIcon}</h1>
            <p>Iris Watson. 10, P.O. Box 283 Newyork</p>
          </div>
          <div className="row col-lg-4 col-md-4 col-sm-12 justify-content-center text-center mx-auto ">
            <h1 className="display-2 pt-lg-5 pt-xl-5 pt-md-5">{clockIcon}</h1>
            <div>
              <p>
                <span className="text-danger">Week Days: </span>10:00 - 22:00
              </p>
              <p >
                <span className="text-danger">Sunday: </span>Close
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-2 ">
        <h1 className="fw-bold text-center">Our Social Platforms</h1>
        <div
          className="bg-white col-lg-6 d-flex justify-content-evenly
                mx-auto p-2"
        >
          <span className="text-danger">
            <a href="https://www.youtube.com/"><h2>{youtubeIcon}</h2></a>
          </span>
          <span className="text-danger">
            <a href="https://www.facebook.com/"><h2>{facebookIcon}</h2></a>
          </span>
          <span className="text-danger">
            <a href="https://twitter.com/"><h2>{twitterIcon}</h2></a>
          </span>
          <span className="text-danger">
            <a href="https://www.linkedin.com/"><h2>{linkedinIcon}</h2></a>
          </span>
          <span className="text-danger">
            <a href="https://www.pinterest.com/"><h2>{pinteresIcon}</h2></a>
          </span>
        </div>
      </div>
      <div className="bg-white p-2">
        <div className="mb-3 col-xl-8 col-lg-8 col-md-6 col-12 mx-auto ">
          <label for="exampleFormControlInput1" className="form-label fw-bold">
            Name
          </label>
          <input
            type="text"
            className="form-control border border-dark"
            id="exampleFormControlInput1"
            placeholder="Your name here"
          />
        </div>
        <div className="mb-3 col-xl-8 col-lg-8 col-md-6 col-12 mx-auto">
          <label for="exampleFormControlInput1" className="form-label fw-bold">
            Email address
          </label>
          <input
            type="email"
            className="form-control border border-dark"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3 col-xl-8 col-lg-8 col-md-6 col-12 mx-auto">
          <label
            for="exampleFormControlTextarea1"
            className="form-label fw-bold"
          >
            Message
          </label>
          <textarea
            className="form-control border border-dark"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3 col-xl-8 col-lg-8 col-md-6 col-12 mx-auto ">
          <button className="btn btn-primary fw-bold">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
