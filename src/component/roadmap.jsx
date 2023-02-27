import React from "react";
import { FaRoad } from "react-icons/fa";
export const Roadmap = () => {
    const map1  = ['First Roadmap', 'First1 Roadmap', 'First 2Roadmap', 'First R3oadmap', 'First Ro4admap', 'First Roa5dmap',];
    const cardFunc = (head, map) => {
        return{head, map}
    }

    const cardArr = [
        cardFunc('First Quater (Q1)', map1),
        cardFunc('Second Quater (Q2)', map1),
        cardFunc('Third Quater (Q3)', map1)
    ]
  return (
    <>
      <div className="roadmap">
        <div className="roadmap-intro text-center">
          <h1>Lets Take you on a Journey</h1>
        </div>
        <div className="roadmap-img">
          <img src="road.jpg" alt="roadmap" className="img-fluid" />
        </div>
        <div className="roadmap-data">
          <div className="container">
            <div className="head justify-content-center">
              <div className="head-icon p-1 ">
                <FaRoad />
              </div>
              <div className="head-text p-2">
                <h1>Roadmap</h1>
                <small>Communicate. Collaborate. Create.</small>
              </div>
            </div> <br />
            <div className="road-card-con">
                <div className="container">
                    <div className="row">
                        {cardArr.map((i, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 p-2" key={index}>
                            <div className="road-card">
                                <div className="head">
                                    <h3>{i.head}</h3>
                                </div>
                                <div className="content">
                                    <ul>
                                        {i.map.map((m, index) => (
                                            <li key={index}>{m}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
