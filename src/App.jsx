import { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Whowework } from "./components/Whowework";
import { Services } from "./components/services";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import './css/newstyle.css';
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Helmet> 
        <title>One-Plus</title>
        <meta name="info" content="this is one-plus website"></meta>
        <meta name="keywords" content="one-plus , service"></meta> 
      </Helmet>
      <About data={landingPageData.About} />
      <Whowework data={landingPageData.Whowework}/>
      <Services data={landingPageData.Services} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
