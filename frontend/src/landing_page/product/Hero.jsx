import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="text-center mt-5 p-3 p-md-5 mb-5">
        <h1 className="fs-2">Zerodha Products</h1>
        <h4 className="text-muted mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </h4>
        <p className="mt-4">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
