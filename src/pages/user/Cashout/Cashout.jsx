import React, { useState } from "react";
import "./Cashout.css";
import { Link } from "react-router-dom";

const Cashout = () => {
  const [cashout, setCashout] = useState({
    method: "Bikash",
    amount: null,
    account_number: "",
    note: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCashout((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="section">
      <header class="diposits">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="diposit-header">
                <Link to="/">
                  <i class="bi bi-chevron-left"></i>
                </Link>{" "}
                <h2>Cashout</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card shadow">
                <div class="card-body">
                  <div class="divshadow">
                    <h3>
                      Minimum Investment is 500 BDT, Maximum Investment is 30000
                      BDT{" "}
                    </h3>
                  </div>

                  <div className="gatwaydivshadow">
                    <div class="container mt-3 getway "></div>

                    <div class="form mt-5">
                      <div class="transection">
                        <h3 className="text-center">
                          Enter details of your transactions
                        </h3>
                      </div>

                      <form
                        action=""
                        id="userFormdeposit"
                        class="form-container"
                      >
                        <div class="input-group mb-3">
                          <label class="getwaylabel">Method</label>
                          <select
                            onChange={handleChange}
                            value={cashout.method}
                            name="method"
                            id="method"
                            className="form-control seletctGetwaymethord"
                          >
                            <option value="Bikash">Bkash</option>
                            <option value="Nagad">Nagad</option>
                            <option value="Rocket">Rocket</option>
                            <option value="Crypto">Crypto</option>
                          </select>
                        </div>
                        <div class="input-group my-5">
                          <input
                            onChange={handleChange}
                            value={cashout.account_number}
                            name="account_number"
                            required
                            className="form-control seletctGetwaymethord"
                            id="amounts"
                            placeholder="Phone Number"
                            type="number"
                          />
                        </div>
                        <div class="input-group my-5">
                          <input
                            onChange={handleChange}
                            value={cashout.amount}
                            name="amount"
                            required
                            className="form-control seletctGetwaymethord"
                            id="amounts"
                            placeholder="Amount"
                            type="number"
                          />
                        </div>
                        <div class="input-group my-5">
                          <input
                            onChange={handleChange}
                            value={cashout.note}
                            name="note"
                            required
                            className="form-control seletctGetwaymethord"
                            id="note"
                            placeholder="Note"
                            type="text"
                          />
                        </div>

                        <button
                          onClick={handleSubmit}
                          value="submit"
                          class="submit-btn"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cashout;
