import React from "react";

export const Service = () => {
  const cardFunc = (img, title, text) => {
    return { img, title, text };
  };
  const carArr = [
    cardFunc(
      "s1.jpeg",
      "Workflows That Work",
      "I'm a paragraph. Click here to add your own text and editme. I’m a great place"
    ),
    cardFunc(
      "s2.jpeg",
      "Workflows That Work",
      "I'm a paragraph. Click here to add your own text and editme. I’m a great place"
    ),
    cardFunc(
      "s3.jpeg",
      "Workflows That Work",
      "I'm a paragraph. Click here to add your own text and editme. I’m a great place"
    ),
    cardFunc(
      "s4.jpeg",
      "Workflows That Work",
      "I'm a paragraph. Click here to add your own text and editme. I’m a great place"
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
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
          </div>
          <div className="service-body">
            <div className="row justify-content-center">
              {carArr.map((i, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="card-con">
                    <div className="card-img">
                      <img src={i.img} className='img-thumbnail' alt="vcdao" />
                    </div>
                    <div className="card-head p-1">
                      <span className="h5"><b>{i.title}</b></span>
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
