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
        <meta name="info" content="this is one-plus website"></meta>
        <meta name="keywords" content="one-plus , service"></meta>
        <meta name="title" content=": Unique Marketing Consultancy for Asian brands across the world "></meta>
        <meta name="description" content=":We are a team of marke+ng experts with a vision to help your organisa+on with proven 
        marke+ng methodologies that interpret and adapt to the changing world and deliver effec+ve results. "></meta>
        <meta name="Seo tags" content=":Digital marke,ng, UK marke,ng, Chinese marke,ng, content marke,ng, influencer marke,ng, Indian 
        company, Japan company, Marke,ng, Market analysis, content, SEO, SEM, SMM, influencer, London, 
        agency, video, branding, brand, campaign, strategy, research, asian, SME, startup, business, design, brand 
        book, adver,sing, crea,ve, innova,on, visual iden,ty, market entry, brand architecture, engagement, 
        consumer journey, customer mapping, communica,on, western market, case study, personalised 
        marke,ng, brand strategy, brand health, culture development, customer engagement, exper,se, Reputa,on 
        management, ORM, growth marke,ng, effec,ve marke,ng solu,on, result oriented, KPI, ROI, data driven, 
        insighJul"></meta>
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
