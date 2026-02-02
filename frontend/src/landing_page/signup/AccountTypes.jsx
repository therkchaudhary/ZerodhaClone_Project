const AccountTypes = () => {
  const accounts = [
    { title: "Individual Account", desc: "Invest in equity, mutual funds and derivatives" },
    { title: "HUF Account", desc: "Make tax-efficient investments for your family" },
    { title: "NRI Account", desc: "Invest in equity, mutual funds, and more" },
    { title: "Minor Account", desc: "Invest for your child’s future" },
    { title: "Corporate / LLP / Partnership", desc: "Manage business investments" },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">
          Explore different account types
        </h2>

        <div className="row g-4">
          {accounts.map((acc, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>{acc.title}</h5>
                  <p className="text-muted">{acc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountTypes;