export const Brand = (props) => {
  return (
    <div id="brand">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 ">
            <div className="brand-text">
              <h1>{props.data ? props.data.paragraph : "loading..."}</h1>
            </div>
          </div>
          <div className="col-xs-12">
            {" "}
            <img src="img/image4.jpg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
