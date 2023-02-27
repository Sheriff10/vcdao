import React from "react";
import { FaSquare, FaTelegram, FaTwitter, FaChartBar } from "react-icons/fa";

export const Tokenomics = () => {
  const tkCardFunc = (color, title, result) => {
    return { color, title, result };
  };
  const tkCardArr = [
    tkCardFunc("red", "Token Name", "VC DAO"),
    tkCardFunc("green", "Token Symbol", "VCD"),
    tkCardFunc("white", "Network", "Arbitrum"),
    tkCardFunc("blue", "Total Supply", "150m"),
    tkCardFunc("orange", "Max Supply", "170m"),
    tkCardFunc("purple", "Circulating Supply", "10m"),
    tkCardFunc("pink", "Tax buy/sell", "10/12 %"),
  ];
  return (
    <div className="tk container-fluid">
      <div className="wrapper">
        <div className="tk-had p-3 text-light text-center">
          <h1 className="text-light">TOKENOMICS</h1>
          <h4>
            $LOPO is a streamable utility token, <br /> planned to provide a wide range
            of benefits and incentives for LOPO users.
          </h4>
        </div>
        <div className="row justify-content-center align-item-center">
          <div className="col-lg-6 col-sm-8 ">
            <div className="tk-card m-2">
              <div className="row">
                {tkCardArr.map((i, index) => (
                  <div className="col-lg-12 p-2 row" key={index}>
                    <div className="col-2">
                      <div className={`icon ${i.color}`}>
                        <FaSquare />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="title">
                        <span>{i.title}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <span>{i.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-8 row align-items-center text-center">
            <div className="tk-btns">
              <div className="head text-light">
                <h4>TRIAD DAO TOKEN INFO AND COMMUNITY</h4>
                <div className="input-group mb-3">
                  <span className="input-group-text">ARB Chain:</span>
                  <input
                    type="text"
                    value={"0xd8D4000dd9ad501FD0Ea918e2f0a22C62668Af88"}
                    className="form-control"
                    readOnly
                  />
                </div>
              </div>
              <div className="body">
                <div className="buy">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 p-2">
                      <button className="btn btn-outline-warning">
                        <img
                          src="camelot.jpeg"
                          alt="camelot.com"
                          className="m-1 "
                        />
                        <span>Buy on Camelot</span>
                      </button>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 p-2">
                      <button className="btn btn-outline-secondary">
                        <img
                          src="dexscreener.png"
                          alt="dexscreener.com"
                          className="m-1 "
                        />
                        <span>Buy on Camelot</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="socials">
                  <div className="row">
                    <div className="col-lg-4 p-2 col-md-6 col-sm-12">
                      <button className="btn btn-outline-info">
                        <FaTelegram /> Telegram
                      </button>
                    </div>
                    <div className="col-lg-4 p-2 col-md-6 col-sm-12">
                      <button className="btn btn-outline-primary">
                        <FaTwitter /> Twitter
                      </button>
                    </div>
                    <div className="col-lg-4 p-2 col-md-12 col-sm-12">
                      <button className="btn btn-outline-danger">
                        <FaChartBar /> Arbiscan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
