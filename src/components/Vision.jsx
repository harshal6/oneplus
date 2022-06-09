export const Vision = (props) => {
  return (
    <div id="vision">
      <div className="container">
        <div className="row">
          <div className="vision-about col-lg-6">
            <div className="vision-text">
              <h2> About Us </h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
            </div>
          </div>
        </div>
        <h3>Our Approach </h3>
        <div className="our-approach-section">
              <div className="our-approach-section-box">
                <h4>Global Experience</h4>
                <p>{props.data ? props.data.gE : "loading..."}</p>
              </div>
              <div className="our-approach-section-box">
                <h4>Customized Package</h4>
                <p>{props.data ? props.data.cP : "loading..."}</p>
              </div>
              <div className="our-approach-section-box">
                <h4>Cultural Integration</h4>
                <p>{props.data ? props.data.cI : "loading..."}</p>
              </div>
        </div>
      </div>
    </div>
  );
};