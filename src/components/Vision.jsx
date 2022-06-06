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
      </div>
    </div>
  );
};
