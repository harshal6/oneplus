export const Brand = (props) => {
  return (
    <div id="brand">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h1>{props.data ? props.data.paragraph : "loading..."}</h1>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
