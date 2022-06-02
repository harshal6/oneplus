export const Brand = (props) => {
  return (
    <div id="brand">
      <div className="container">
        <div className="brand-sub-wrapper">
          <div className="">
            <div className="brand-text">
              <h1>{props.data ? props.data.paragraph : "loading..."}</h1>
            </div>
          </div>
          <div className="">
            {" "}
            <img src="img/man-loudly-screaming-megaphone-making-announce-protesting-wants-be-heard.png" className="img-responsive brand-image" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
