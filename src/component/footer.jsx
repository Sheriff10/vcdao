import React from "react";
import { FaTwitter, FaDiscord, FaTelegram, FaMedium } from "react-icons/fa";

export const Footer = () => {
  const sFunc = (icon, text) => {
    return { icon, text };
  };
  const sArr = [
    sFunc(<FaTwitter />, "Twitter"),
    sFunc(<FaTelegram />, "Telegram"),
    sFunc(<FaDiscord />, "Discord"),
    sFunc(<FaMedium />, "Medium"),
  ];
  return (
    <>
      <footer>
        <div className="footer-head">
          <div className="col-lg-8 col-12">
            <h2>Join our community</h2>
            <p>
              Chat with us and others in the community to learn more about Yield
              Protocol.
            </p>
          </div>
        </div>
        <div className="footer-social">
          <div className="col-lg-8 col-12">
            <div className="row justify-content-center">
              {sArr.map((i, index) => (
                <div className="col-lg-3 col-6" key={index}>
                  <div className="s-con text-center">
                    <div>
                      <h1>
                        {i.icon}
                      </h1>
                      <p>Twitter</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-caption">
          <div className="men1">
            <ul>
              {sArr.map((i, index) => (
                <li key={index}>
                  <a href="#">
                    <span className="p-1">{i.icon}</span> {i.text}
                  </a>
                </li>
              ))}
              <li>
                <a href="#"> Career</a>
              </li>
              <li>
                <a href="#"> Launchpad</a>
              </li>
              <li>
                <a href="#"> Trade</a>
              </li>
            </ul>
          </div>
          <div className="men2">
            <ul>
              <li><a href="#"> Privacy</a> </li>
              <li><a href="#"> Terms</a> </li>
              <li><a href="#"> © 2023</a> </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
