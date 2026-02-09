import React from "react";

function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 p-3 p-md-5">
          <img src={imgURL} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 p-5 mt-5">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i className="fa-solid fa-arrow-right-long"></i></a>
            <a href={learnMore} style={{ textDecoration: "none", marginLeft: "50px" }}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg" alt="Google Play Badge" />
            </a>
            <a href={appStore}>
              <img src="media/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
                alt="App Store Badge"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
