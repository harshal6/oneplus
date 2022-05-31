export const Whowework = (props) => {
  return (
    <div id="whowework" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>WHO WE WORK WITH.</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-4">
                  {" "}
                  <div className="whowework-section">
                      <h3>{d.title}</h3>
                      <ul>
                          <li className="whowework-info">{d.info1}</li>
                          <li className="whowework-info">{d.info2}</li>
                      </ul>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
