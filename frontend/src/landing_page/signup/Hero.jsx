const Hero = () => {
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
          <div className="col-md-6 text-center">
            <img style={{width:"90%"}} className="mx-5 " src="media/account_open.svg" alt="" />
          </div>

          {/* RIGHT */}
          <div className="col-md-6 ">
            <h4>Signup now</h4>
            <p className="text-muted">Or track your existing application</p>

            <div className="input-group mb-3 w-60">
              <span className="input-group-text">+91</span>
              <input
                type="text"
                className="form-control py-3"
                placeholder="Enter your mobile number"
              />
            </div>

            <button className="btn btn-primary w-100 py-3">
              Get OTP
            </button>

            <p className="small text-muted mt-3">
              By proceeding, you agree to Zerodha <a href="" style={{textDecoration:"none"}}>terms</a> & <a href="" style={{textDecoration:"none"}}>privacy policy</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;