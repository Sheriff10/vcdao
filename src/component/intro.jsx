import { FaLock } from "react-icons/fa";
const Intro = () => {
  const iconFunc = (iconName, icon) => {
    return { iconName, icon };
  };
  const iconArr = [
    iconFunc("Speed & Security", <FaLock />),
    iconFunc("Speed & Security", <FaLock />),
    iconFunc("Speed & Security", <FaLock />),
  ];
  return (
    <>
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 intro-text">
              <div className="text-head">
                <h1>
                  {" "}
                  Communicate. <br /> Collaborate. Create.
                </h1>{" "}
                <br />
                <p>
                  WeDu provides an effective and powerful way <br /> to manage
                  your projects
                </p>
              </div>
              <div className="text-cap">
                <div className="row">
                  {iconArr.map((i, index) => (
                    <div className="col-lg-4 col-sm-12 col-md-12" key={index}>
                      <div className="m-1 row align-items-center">
                        <div className="icon-wrapper col-1 col-lg-2 col-sm-1 col-md-1 col-xs-1 p-1 m-0">
                          {i.icon}
                        </div>
                        <div className="icon-text col-10">
                          <small>{i.iconName}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn col-10 m-3 text-light btn-outline-secondary">
                  {" "}
                  <b>Launch App</b>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 intro-img text-center">
              <div className="row">
                <div className="intro-img-con">
                  <img src="vcLogo_light.png" className="img-fluid" alt="build" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
