import React from "react";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-lg-6 col-sm-12 mt-4 head text-primary">
            <h1>ABOUT TRIAD DAO</h1>
          </div>
          <div className="col-lg-6 col-sm-12 content mt-3">
            <p>
              Our DAO aims to provide a launchpad for startups and a
              decentralized exchange (DEX) for trading cryptocurrencies. The aim
              of this project is to provide a secure, transparent, and efficient
              platform for both startups and investors.
            </p>{" "}
            <br /> <br />
            <a
              href="./TRIADDAO_whitepaper.pdf"
              className="btn col-12 btn-outline-primary btn-small"
              download
            >
              Read our whitepaper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
