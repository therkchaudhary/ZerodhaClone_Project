import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h1 className="fs-2">Charges</h1>
        <h4 className="text-muted mt-2 fs-5">List of all charges and taxes</h4>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-12 col-md-4 p-5 ">
          <img src="media/pricingEquity.svg" style={{ width: "80%" }} alt="Equity" />
          <h1 className="fs-3 mt-4">Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-5 ">
          <img src="media/intradayTrades.svg" style={{ width: "80%" }} alt="Intraday" />
          <h1 className="fs-3 mt-4">Intraday and F&O trades</h1>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-5 ">
          <img src="media/pricingEquity.svg" style={{ width: "80%" }} alt="Mutual Funds" />
          <h1 className="fs-3 mt-4">Free direct MF</h1>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
