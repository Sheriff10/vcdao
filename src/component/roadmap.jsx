import React from "react";
import { FaRoad } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const Roadmap = () => {
  const map1 = [
    "First Roadmap",
    "First1 Roadmap",
    "First 2Roadmap",
    "First R3oadmap",
    "First Ro4admap",
    "First Roa5dmap",
  ];
  const cardFunc = (head, map) => {
    return { head, map };
  };

  const cardArr = [
    cardFunc(" (Q1)", map1),
    cardFunc("(Q2)", map1),
    cardFunc("(Q3)", map1),
  ];
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  return (
    <>
      <div className="roadmap">
        <div className="roadmap-intro text-center">
          <br />
          <br />
          <h1>Lets Take you on a Journey</h1>
        </div>
        <br />
        <div className="roadmap-img">
          <img src="road.jpg" alt="roadmap" className="img-fluid" />
        </div>
        <div className="roadmap-data">
          <div className="container">
            <div className="head justify-content-center">
              <div className="head-icon p-1 ">
                <FaRoad />
              </div>
              <div className="head-text p-2">
                <h1>Roadmap</h1>
                <small>Communicate. Collaborate. Create.</small>
              </div>
            </div>{" "}
            <br />
            <div className="road-card-con">
              <div className="container">
                <div className="rd-row">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    pagination={true}
                    grabCursor={true}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 1,
                      },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                  >
                    {cardArr.map((i, index) => (
                      <SwiperSlide key={index}>
                        <div className="col-12 p-2">
                          <div className="road-card">
                            <div className="head">
                              <h3>{i.head}</h3>
                            </div>
                            <div className="content">
                              <ul>
                                {i.map.map((m, index) => (
                                  <li key={index}>{m}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
