import React from "react";

export const Upcoming = () => {
  return (
    <>
      <div className="up">
        <div className="container-fluid">
          <div className="container">
            <div className="up-title text-center p-5 text-primary">
              <h1>UPCOMING</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-5 uw col-md-8 col-sm-12">
                <div className="up-head">
                  <h1>DEX</h1>
                  <span>
                    Get ready for a game-changing launch! Our team is building a
                    cutting-edge decentralized exchange, powered by blockchain
                    technology. Trade cryptocurrencies securely and
                    transparently on our intuitive platform. With rigorous testing and auditing
                    of our smart contracts, we're committed to providing a safe
                    and reliable experience. Join us on this exciting journey
                    towards a more decentralized future
                  </span>
                </div>
                <div className="up-img">
                  <img src="DEX.jpg" alt="DEX" />
                </div>
              </div>
              <div className="col-lg-5 uw col-md-8 col-sm-12">
                <div className="up-head">
                  <h1>Launchpad</h1>
                  <span>
                    Our launchpad will allow startups to raise funds by offering
                    their tokens to investors. Startups will be required to
                    submit their project details, including whitepapers, team
                    details, and business plans. Investors will have access to
                    this information, allowing them to make informed decisions
                    about which projects to invest in.
                  </span>
                </div>
                <div className="up-img">
                  <img src="launchpad.jpeg" alt="DEX" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
