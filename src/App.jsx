// import logo from './logo.svg';
import "./App.css";
import { About } from "./component/about";
import { Footer } from "./component/footer";
import Header from "./component/header";
import Intro from "./component/intro";
import { Roadmap } from "./component/roadmap";
import { Service } from "./component/service";
import {Swipers} from "./component/swiper";
import { Tokenomics } from "./component/tokenomics";
import { Upcoming } from "./component/upcoming";
// import "./css/bootstrap.min.css";
import "./css/header.css";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Upcoming />
      <Service />
      <Roadmap />
      <Tokenomics />
      <Footer />
    </>
  );
}

export default App;
