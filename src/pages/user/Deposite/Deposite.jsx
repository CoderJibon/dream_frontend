import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Deposite.css";

const Deposite = () => {
  const [deposit, setDeposit] = useState({
    type: "bKash",
    number: "",
    amount: null,
    transaction_id: "",
  });

  const [css, setCss] = useState({});

  const copyNumber = (numberToCopy) => {
    navigator.clipboard
      .writeText(numberToCopy)
      .then(() => {
        alert(numberToCopy);
      })
      .catch((error) => {
        alert(`Copy failed! ${error}`);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeposit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="section">
      <header className="diposits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="diposit-header">
                <Link to="/">
                  <i className="bi bi-chevron-left"></i>
                </Link>
                <h2>Diposit</h2>
              </div>
            </div>

            <div class="form mt-5">
              <div className="card shadow">
                <div className="card-body">
                  <div className="divshadow">
                    <h3>
                      Minimum Investment is 500 BDT, Maximum Investment is 30000
                      BDT
                    </h3>
                  </div>
                  <div className="gatwaydivshadow">
                    <div className="app-number-copied">
                      <div className="app-logo">
                        <img
                          className="getwayimg"
                          src="https://i.ibb.co/3Tmj38L/1656234841bkash-icon-png.webp"
                          alt=""
                        />
                      </div>
                      <div className="app-details">
                        <h3 className="m-0">Bikash:</h3>
                        <div className="number-container">
                          <span className="numberToCopy">0191541073</span>
                          <button
                            className="copy-button"
                            onClick={() => copyNumber("0191541073")}
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="app-number-copied mt-3">
                      <div className="app-logo">
                        <img
                          className="getwayimg"
                          src="https://i.ibb.co/N6XYWyN/images.png"
                          alt=""
                        />
                      </div>
                      <div className="app-details">
                        <h3 className="m-0">Nagad:</h3>
                        <div className="number-container">
                          <span className="numberToCopy">01721439073</span>
                          <button
                            className="btn btn-primary copy-button"
                            onClick={() => copyNumber("01721439073")}
                          >
                            Copy
                          </button>
                        </div>
                      </div>

                      <div className="app-details">
                        <h3 className="m-0">Crypto Link : </h3>
                        <div className="number-container">
                          <input
                            className="cryptoLink"
                            placeholder="TLA3P7c87fSkzuGsipw1XTkwXFL5vmV51U"
                          />
                          <button
                            className="btn btn-primary copy-button"
                            onClick={() =>
                              copyNumber("TLA3P7c87fSkzuGsipw1XTkwXFL5vmV51U")
                            }
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gatwaydivshadow">
                <div className="form mt-5">
                  <div className="transection">
                    <h3 className="text-center">
                      Enter details of your transactions
                    </h3>
                  </div>

                  <form id="userFormdeposit" className="form-container">
                    <div className="input-group mb-3">
                      <label className="getwaylabel">Method</label>
                      <select
                        onChange={handleChange}
                        value={deposit.type}
                        name="type"
                        id="method"
                        className="form-control seletctGetwaymethord"
                      >
                        <option value="Bikash">Bkash</option>
                        <option value="Nagad">Nagad</option>
                        <option value="Rocket">Rocket</option>
                        <option value="Cripto">Cripto</option>
                      </select>
                    </div>

                    <div className="input-group my-5">
                      <input
                        name="number"
                        onChange={handleChange}
                        value={deposit.number}
                        className="form-control seletctGetwaymethord"
                        id="amounts"
                        placeholder="Phone Number"
                        type="number"
                      />
                    </div>

                    <div className="input-group my-5">
                      <input
                        name="amount"
                        onChange={handleChange}
                        value={deposit.amount}
                        className="form-control seletctGetwaymethord"
                        id="amounts"
                        placeholder="Amount"
                        type="number"
                      />
                    </div>

                    <div className="input-group my-5">
                      <input
                        name="transaction_id"
                        onChange={handleChange}
                        className="form-control seletctGetwaymethord"
                        value={deposit.transaction_id}
                        id="transactions"
                        placeholder="Transaction ID"
                        type="text"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="submit-btn"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Deposite;
