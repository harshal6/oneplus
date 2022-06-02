export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            {/* <div className="row"> */}
              <div className="intro-text">
                <p>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </p>
                <h1>{props.data ? props.data.paragraph : "Loading"}</h1>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
              {/* <div className="col-md-8  col-md-offset-2 intro-img">
                {" "}
                <img
                  src="img/digital-marketing-company-usa.png"
                  className="img-responsive"
                  alt=""
                />{" "}
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};
