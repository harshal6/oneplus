export const Work = (props) => {
  return (
    <div id="Work" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>OUR SERVICES</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row service-wapper">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  {/* <img src={d.img} alt="..." className="icon-img" /> */}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <li>{d.list1}</li>
                    <li>{d.list2}</li>
                    <li>{d.list3}</li>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
