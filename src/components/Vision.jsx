export const Vision = (props) => {
  return (
    <div id="vision">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="vision-text">
              <h2> About Us </h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
            </div>
          </div>
        </div>
        <h3>OUR APPROACH</h3>
        <div className="our-approach-section">
              <div>
                <h4>Global Experience</h4>
                <p>{props.data ? props.data.gE : "loading..."}</p>
              </div>
              <div>
                <h4>Customized Package</h4>
                <p>{props.data ? props.data.cP : "loading..."}</p>
              </div>
              <div>
                <h4>Cultural Integration</h4>
                <p>{props.data ? props.data.cI : "loading..."}</p>
              </div>
        </div>
      </div>
    </div>
  );
};