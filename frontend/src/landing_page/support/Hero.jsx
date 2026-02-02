import React from "react";

function Hero() {
  return (
    <section id="supportHero">
      <div className="support-inner">
        {/* Top Row */}
        <div className="support-top">
          <h4>Support Portal</h4>
          <a href="#" className="track-link">
            Track Tickets
          </a>
        </div>

        {/* Main Content */}
        <div className="row pb-5">
          {/* Left */}
          <div className="col-md-6">
            <h2 className="hero-title">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <input
              type="text"
              className="form-control hero-input my-4"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
            />

            <div className="hero-links">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          {/* Right */}
          <div className="col-md-6">
            <h2 className="featured-title">Featured</h2>
            <ol className="featured-list mt-3">
              <li>
                <a href="#">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="#">Latest Intraday leverage - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
