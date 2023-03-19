import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

export const Footer = () => {
   const sFunc = (icon, text, link) => {
      return { icon, text, link };
   };
   const sArr = [
      sFunc(
         <FaTwitter />,
         "Twitter",
         "https://twitter.com/triaddao?s=21&t=XPxXw1bYBLxZJXEq0mYpTA"
      ),
      sFunc(<FaTelegram />, "Telegram", "https://t.me/+-3w7F7xI3hwxNWMx"),
      // sFunc(<FaDiscord />, "Discord"),
      // sFunc(<FaMedium />, "Medium"),
   ];
   return (
      <>
         <footer>
            <div className="footer-head">
               <div className="col-lg-8 col-12">
                  <h2>Join our community</h2>
                  <p>
                     Chat with us and others in the community to learn more
                     about TRIAD DAO.
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
                                 <h1>{i.icon}</h1>
                                 <p>
                                    <a className="text-dark" href={i.link}>{i.text}</a>
                                 </p>
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
                           <a href={i.link}>
                              <span className="p-1">{i.icon}</span> {i.text}
                           </a>
                        </li>
                     ))}
                     <li>
                        <a href="./TRIADDAO_whitepaper.pdf" download>
                           {" "}
                           Whitepaper
                        </a>
                     </li>
                     <li>
                        <a href="#"> Launchpad</a>
                     </li>
                     <li>
                        <a href="#about"> About</a>
                     </li>
                  </ul>
               </div>
               <div className="men2">
                  <ul>
                     <li>
                        <a href="#">TRIAD DAO © 2023</a>{" "}
                     </li>
                  </ul>
               </div>
            </div>
         </footer>
      </>
   );
};
