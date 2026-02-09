const Steps = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fs-3 mb-5">
          Steps to open a demat account with Zerodha
        </h2>

        <div className="row justify-content-center">
          <div className="row">
            <div className="col-12 col-md-6 text-center">
              <img
                src="media/steps-acop.svg"
                className="img-fluid mb-5 mb-md-0"
                style={{ maxWidth: "70%" }}
                alt="Steps to Open Account"
              />
            </div>
            <div className="col-md-6">
              {[
                "Enter the requested details",
                "Complete e-sign & verification",
                "Start investing!",
              ].map((step, i) => (
                <div
                  key={i}
                  className="d-flex fs-4 align-items-center border-bottom py-3"
                >
                  <span className="badge bg-secondary rounded-circle me-3">
                    {`0${i + 1}`}
                  </span>
                  <h6 className="mb-0 fs-5 text-muted">{step}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
