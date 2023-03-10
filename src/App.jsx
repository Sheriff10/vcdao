// import logo from './logo.svg';
import "./App.css";
import { About } from "./component/about";
import { Footer } from "./component/footer";
import Header from "./component/header";
import Intro from "./component/intro";
import { Roadmap } from "./component/roadmap";
import { Service } from "./component/service";
import { Tokenomics } from "./component/tokenomics";
import { Upcoming } from "./component/upcoming";
import "./css/header.css";

function App() {
  return (
    <>
      <div className="spookybg">
      <div className="sp-wrapper">
      <Header />
      <Intro />
      </div>
      </div>
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
