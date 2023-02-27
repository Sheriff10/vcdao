import React from "react";

export const Service = () => {
  const cardFunc = (img, title, text) => {
    return { img, title, text };
  };
  const carArr = [
    cardFunc(
      "s1.jpeg",
      "Workflows That Work",
      "I'm a paragraph. Click here to add your own text and editme. I’m a great place for you to tell a story and let yourusers know a little more about you."
    ),
    cardFunc(
      "s2.jpeg",
      "Workflows That Work",
      "I'm a paragraph. Click here to add your own text and editme. I’m a great place for you to tell a story and let yourusers know a little more about you."
    ),
    cardFunc(
      "s3.jpeg",
      "Workflows That Work",
      "I'm a paragraph. Click here to add your own text and editme. I’m a great place for you to tell a story and let yourusers know a little more about you."
    ),
    cardFunc(
      "s4.jpeg",
      "Workflows That Work",
      "I'm a paragraph. Click here to add your own text and editme. I’m a great place for you to tell a story and let yourusers know a little more about you."
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
            <div className="row">
              {carArr.map((i, index) => (
                <div className="col-lg-3 col-md-6 col-6" key={index}>
                  <div className="card-con  p-2 m-1">
                    <div className="card-img ">
                      <img src={i.img} className='img-thumbnail' alt="vcdao" />
                    </div>
                    <div className="card-head p-1">
                      <h4>{i.title}</h4>
                    </div>
                    <div className="card-text p-1">
                      {i.text}
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
