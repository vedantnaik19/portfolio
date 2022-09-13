import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import LogoTitle from "../../assets/images/logo-v.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faHammer } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <div className="container experience-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Experience".split("")}
            idx={15}
          />
        </h1>
        <div>
          {/* <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={LogoTitle} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>*/}
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faHammer}
              color="#"
              className="anchor-icon"
            />{" "}
            Under Construction
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
