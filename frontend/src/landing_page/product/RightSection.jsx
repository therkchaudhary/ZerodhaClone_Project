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
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a
              href={learnMore}
              style={{ textDecoration: "none", }}
            >
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>  
        </div>
        <div className="col-6">
          <img src={imgURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
