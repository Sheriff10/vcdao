import React from "react";
import { FaChartBar } from "react-icons/fa";

export const Tokenomics = () => {
  return (
    <div className="tk container-fluid" id="tk">
      <div className="wrapper">
        <div className="tk-had p-3 text-light text-center">
          <h1 className="text-light">TOKENOMICS</h1>
          <p>
            Our DAO will issue its own token, which will be used as ameans of
            exchange on the platform. The token will be an ERC-20 token, <br />{" "}
            built on the Arbitrum blockchain. The token will be used to pay for
            transaction fees on the platform, and will also be used as a <br />{" "}
            means of investment in the projects listed on the launchpad.
          </p>
        </div>
        <div className="row justify-content-center align-item-center">
          <div className="col-lg-6 col-sm-8 ">
            <div className="tk-card m-2">
              <div className="row">
                <div className="tk-img">
                  <img src="tk.png" alt="tokenomics" className="img-fluid " />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-8 row align-items-center text-center">
            <div className="tk-btns">
              <div className="head text-light">
                <div className="input-group mb-3">
                  <span className="input-group-text">TRIAD Token:</span>
                  <input
                    type="text"
                    value={"0x.......8"}
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
                        <span>View on Dexscreener</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="socials">
                  <div className="row">
                    <div className="col-12 p-2">
                      <button className="btn col-12 btn-outline-danger">
                        <FaChartBar /> Scan on Arbiscan.io
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
