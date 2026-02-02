const Benefits = () => {
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-6 text-center">
            <img src="media/acop-benefits.svg" style={{width:'50%', marginTop:'20%'}} alt="" />
            <h2 className="text-center fs-4 text-muted mt-4 mb-5">
              Benefits of opening a Zerodha demat account
            </h2>
          </div>
          <div className="col-6">
            <div className="row">
              <h4>Unbeatable pricing</h4>
              <p className="mt-3 mb-5 text-muted" style={{fontSize:'19px'}}>
                Zero charges for equity & mutual fund investments. Flat ₹20 fees
                for intraday and F&O trades.
              </p>
            </div>
            <div className="row">
              <h4>Best investing experience</h4>
              <p className="mt-3 mb-5 text-muted" style={{fontSize:'19px'}}>
                Simple and intuitive trading platform with an easy-to-understand
                user interface.
              </p>
            </div>
            <div className="row">
              <h4>No spam or gimmicks</h4>
              <p className="mt-3 mb-5 text-muted" style={{fontSize:'19px'}}>
                Committed to transparency — no gimmicks, spam, "gamification",
                or intrusive push notifications.
              </p>
            </div>
            <div className="row">
              <h4>The Zerodha universe</h4>
              <p className="mt-3 mb-5 text-muted" style={{fontSize:'19px'}}>
                More than just an app — gain free access to the entire ecosystem
                of our partner products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
