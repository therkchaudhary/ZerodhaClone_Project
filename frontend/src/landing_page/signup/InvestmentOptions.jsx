const InvestmentOptions = () => {
  return (
    <section className="py-5 ">
      <div className="container text-center">
        <h2 className="mb-5 fs-3 text-center">
          Investment options with Zerodha demat account
        </h2>

        <div className="row"  style={{padding:'0 140px'}}>
          <div className="col-6">
            <div className="row m-5">
              <img
                src="media/stocks-acop.svg"
                style={{
                  maxWidth: "135px",
                  height: "100%",
                  textAlign: "right",
                }}
                alt=""
              />
              <div
                className="col"
                style={{ textAlign: "left", paddingLeft: "0" }}
              >
                <h4>Stocks</h4>
                <p>Invest in all exchange-listed securities</p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="row m-5">
              <img
                src="media/mf-acop.svg"
                style={{
                  maxWidth: "135px",
                  height: "100%",
                  textAlign: "right",
                }}
                alt=""
              />
              <div className="col" style={{ textAlign: "left" }}>
                <h4>Mutual funds</h4>
                <p>Invest in commission-free direct mutual funds</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{padding:'0 140px'}}>
          <div className="col-6">
            <div className="row m-5">
              <img
                src="media/ipo-acop.svg"
                style={{
                  maxWidth: "135px",
                  height: "100%",
                  textAlign: "right",
                }}
                alt=""
              />
              <div className="col" style={{ textAlign: "left" }}>
                <h4>IPO</h4>
                <p>Apply to the latest IPOs instantly via UPI</p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="row m-5">
              <img
                src="media/fo-acop.svg"
                style={{
                  maxWidth: "135px",
                  height: "100%",
                  textAlign: "right",
                }}
                alt=""
              />
              <div className="col" style={{ textAlign: "left" }}>
                <h4>Futures & options</h4>
                <p>
                  Hedge and mitigate market risk through simplified F&O trading
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="btn fs-4 px-3 btn-primary mt-4 mb-4">
          Explore Investments
        </button>
      </div>
    </section>
  );
};

export default InvestmentOptions;
