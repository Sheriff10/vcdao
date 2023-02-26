import React from "react";
import { FaTwitter, FaDiscord, FaTelegram, FaMedium } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-head">
          <h3>VC DAO</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="f-contact">
                <div className="head">
                  <span>
                    <b>Contact</b>
                  </span>
                </div>
                <div className="content">
                  <div>
                    <p>
                      For more inquires, suggestions and advice, reachout to us
                      on any of our social media platform.
                    </p>
                    <p>Or contact us via our email</p>
                    <span>
                      <b>vcda0@gmail.com</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="f-link">
                <div className="head">
                  <span>
                    <b>Quick Link</b>
                  </span>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Home</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="f-follow">
                <div className="head">
                  <span>
                    <b>Follow</b>
                  </span>
                </div>
                <div className="content">
                  <div>
                    <p>
                      Subscibe to our news letter to get update on current
                      updates, news, IDOs, Staking etc.{" "}
                    </p>
                    <small>
                      by subscrbing, you agree to recieve notification from VC
                      DAO based on products and sevices we offer
                    </small>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <div className="btn btn-outline-warning input-group-text">
                        {" "}
                        Subscribe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="f-socials">
                <div className="head">
                  <span>
                    <b>Socials</b>
                  </span>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <FaTwitter /> Twitter
                    </li>
                    <li>
                      <FaDiscord /> Discord
                    </li>
                    <li>
                      <FaTelegram /> Telegram
                    </li>
                    <li>
                      <FaMedium /> Medium
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 text-center p-2">
              <small>
                © 2023 VCDAO LTD. Trademarks and brands are the property of
                their respective owners.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
