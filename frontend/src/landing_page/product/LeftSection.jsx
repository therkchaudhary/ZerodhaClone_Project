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
        <div className="col-6">
          <img src={imgURL} alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDescription}</p>
          <div >
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
            <a href={learnMore} style={{textDecoration:"none", marginLeft:"50px"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg"/>
            </a>
            <a href={appStore}>
              <img src="media/appstoreBadge.svg" 
              style={{marginLeft:"50px"}}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
