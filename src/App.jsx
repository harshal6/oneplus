import { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
// import { Brand } from "./components/brand";
import { Vision } from "./components/Vision";
// import { Whowework } from "./components/Whowework";
import { Work } from "./components/Work";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Footer } from "./components/Footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./css/newstyle.css";
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
        <meta name="title" content=": Unique Marketing Consultancy for Asian brands across the world "></meta>
        <meta name="description" content="We are a team of marketing experts with a vision to help your organisation with proven 
         marketing methodologies that interpret and adapt to the changing world and deliver effective results. "></meta>
        <meta name="keywords" content="one-plus , service ,Digital marketing, UK marketing, Chinese marketing, content marketing, influencer marketing, Indian 
        company, Japan company, Marketing, Market analysis, content, SEO, SEM, SMM, influencer, London, 
        agency, video, branding, brand, campaign, strategy, research, asian, SME, startup, business, design, brand 
        book, advertising, creative, innovation, visual identity, market entry, brand architecture, engagement, 
        consumer journey, customer mapping, communication, western market, case study, personalised 
        marketing, brand strategy, brand health, culture development, customer engagement, expertise, Reputation 
        management, ORM, growth marketing, effective marketing solution, result oriented, KPI, ROI, data driven,insightful "></meta>  
      </Helmet>
      {/* <Brand data={landingPageData.Brand} /> */}
      <Vision data={landingPageData.Vision} />
      <Work data={landingPageData.Work} />
      {/* <Whowework data={landingPageData.Whowework} /> */}
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default App;
