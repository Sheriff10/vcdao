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
                  <h1>Governance</h1>
                  <span>
                    Our DAO will be governed by a decentralized decision-making
                    process. Token holders will be able to vote on important
                    decisions, including the listing of new projects on the
                    launchpad, changes to the fee structure, and changes to the
                    governance model itself.
                  </span>
                </div>
                <div className="up-img">
                  <img src="gov.jpg" alt="DEX" className="gov" />
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
                  <img src="pad.jpg" alt="DEX" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
