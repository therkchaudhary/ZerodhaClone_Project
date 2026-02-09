import React from "react";

function RightSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 p-5 mt-5 order-2 order-md-1">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a
              href={learnMore}
              style={{ textDecoration: "none", }}
            >
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2">
          <img src={imgURL} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
