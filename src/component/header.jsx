// import pdf from '../../public/TRIADDAO_whitepaper.pdf'
const Header = () => {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-btn .menu-btn-burger");
    const slide = document.querySelector(".menu-con");
    if (menu) menu.classList.toggle("open");
    if (slide) slide.classList.toggle("open");
  };
  // menu.addEventListener('click', () => {
  //   menu.classList.add('open')
  //   alert('moti tehh')
  // })
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <div className="col logo-con">
                <img
                  src="../../vcLogo_head.png"
                  alt="traidDao"
                  className="header-logo"
                />
              </div>
            </div>
            <div className="col-8 ">
              <div className="menu-con">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#roadmap">Roadmap</a>
                  </li>
                  <li>
                    <a href="#tk">Tokenomics</a>
                  </li>
                  <li>
                    <a href="./TRIADDAO_whitepaper.pdf" download>
                      <div className="btn btn-light">whitepaper</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu-btn" onClick={toggleMenu}>
                <div className="menu-btn-burger"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
