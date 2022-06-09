import React from "react";
import "./MyProjects.css";
import bikeParts from "../../images/projects/bike-parts.jpg";
import groceryStock from "../../images/projects/grocery-stock.jpg";
import watchAnalyzer from "../../images/projects/watch-analyzer.jpg";
import healthCoach from "../../images/projects/health-coach.jpg";
import phoneFinder from "../../images/projects/phone-finder.jpg";
import emaJhon from "../../images/projects/ema-john.jpg";

const MyProjects = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h1 className="heading">
                my <span>Projects</span>
            </h1>

            <div className="box-container">
                <div className="box">
                    <img src={bikeParts} alt="" />
                </div>

                <div className="box">
                    <img src={groceryStock} alt="" />
                </div>

                <div className="box">
                    <img src={watchAnalyzer} alt="" />
                </div>

                <div className="box">
                    <img src={healthCoach} alt="" />
                </div>

                <div className="box">
                    <img src={phoneFinder} alt="" />
                </div>

                <div className="box">
                    <img src={emaJhon} alt="" />
                </div>
            </div>
        </section>
    );
};

export default MyProjects;
