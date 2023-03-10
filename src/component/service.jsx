import React from "react";
import { FaUserNinja, FaSpider, FaBookDead } from "react-icons/fa";

export const Service = () => {
  const cardFunc = (img, title, text) => {
    return { img, title, text };
  };
  const carArr = [
    cardFunc(
      <FaUserNinja />,
      "Secure and Transparent Trading",
      "Building a DEX  that enables secure and transparent trading without a central authority"
    ),
    cardFunc(
      <FaSpider />,
      "IDO/ICO",
      "We provide launchpad features a carefully curated selection of high-potential projects"
    ),
    cardFunc(
      <FaBookDead />,
      "Decentralized Autonomous Organization",
      "DAO allows users to participate in governance decisions and earn rewards for their contributions"
    ),
  ];
  return (
    <>
      <div className="service">
        <div className="container">
          <div className="service-head">
            <h1>What We Offer</h1> <br />
            <div className="col-lg-6 col-sm-12">
              <p>
                Our upcoming launch offers a suite of cutting-edge DeFi tools,
                including a decentralized exchange (DEX), launchpad, and DAO. With a
                user-friendly interface and rigorous security measures, our
                platform is perfect for both novice and experienced traders.
              </p>
            </div>
          </div>
          <div className="service-body">
            <div className="row justify-content-center">
              {carArr.map((i, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="card-con">
                    <div className="card-img">
                      {/* <img src={i.img} className='img-thumbnail' alt="vcdao" /> */}
                      <div className="s-icon">{i.img}</div>
                    </div>
                    <div className="card-head p-1">
                      <span className="h5">
                        <b>{i.title}</b>
                      </span>
                    </div>
                    <div className="card-text p-1">
                      <small>{i.text}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
