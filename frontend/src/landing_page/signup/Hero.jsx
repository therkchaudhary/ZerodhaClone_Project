const Hero = ({ children }) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          <h3 className="mt-5 fw-semibold text-center">
            Open a free demat and trading account online
          </h3>
          <p className="fs-4 text-muted mt-3 text-center mb-5">
            Start investing brokerage free and join a community of 1.6+ crore investors and traders
          </p>
        </div>

        <div className="row align-items-center p-4">

          {/* LEFT */}
          <div className="col-12 col-md-6 text-center">
            <img style={{ width: "90%" }} className="img-fluid mb-4 mb-md-0" src="media/account_open.svg" alt="Account Open" />
          </div>

          {/* RIGHT */}
          <div className="col-md-6 ">
            {children}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;