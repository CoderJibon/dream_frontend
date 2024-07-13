import { Link } from "react-router-dom";
import "./Deposite.css";
//form handling for
import { useFormik } from "formik";
import * as Yup from "yup";
import SyncLoader from "react-spinners/SyncLoader";
import toastify from "../../../utils/toastify.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
import { createDeposit } from "../../../features/Auth/AuthApiSlice.js";

const Deposite = () => {
  //copy the number
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

  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, isLoading } = useSelector((state) => state.auth);

  //validation schema
  const schema = Yup.object().shape({
    amount: Yup.string().required("amount is required"),
    transactionID: Yup.string().required("transactionID is required"),
    phone: Yup.string().required("phone is required"),
    method: Yup.string().required("method is required"),
  });

  // from handlers
  const formik = useFormik({
    initialValues: {
      amount: "",
      transactionID: "",
      phone: "",
      method: "",
    },
    validationSchema: schema,
    onSubmit: (value) => {
      dispatch(createDeposit(value));
    },
  });

  useEffect(() => {
    if (isError) {
      toastify("error", isError);
      dispatch(setMessageEmpty());
    }
    if (message) {
      toastify("success", message);
      formik.resetForm();
      dispatch(setMessageEmpty());
    }
  }, [isError, message]);

  return (
    <div className="section">
      <SyncLoader
        color={"#4CAF50"}
        loading={isLoading}
        cssOverride={{ position: "fixed", top: "50%", left: "50%" }}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <header className="diposits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="diposit-header">
                <Link to="/">
                  <i className="bi bi-chevron-left"></i>
                </Link>
                <h2>Deposit</h2>
              </div>
            </div>

            <div className="form mt-5">
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

                  <form
                    onSubmit={formik.handleSubmit}
                    id="userFormdeposit"
                    className="form-container"
                  >
                    <div className="input-group mb-3">
                      <label className="getwaylabel">Method</label>
                      <select
                        id="method"
                        className="form-control "
                        onChange={formik.handleChange("method")}
                        //value={formik.values.method}
                      >
                        <option value="">--Select--</option>
                        <option value="Bikash">Bkash</option>
                        <option value="Nagad">Nagad</option>
                        <option value="Rocket">Rocket</option>
                        <option value="Cripto">Cripto</option>
                      </select>
                    </div>

                    <div className="input-group my-5">
                      <input
                        className="form-control "
                        placeholder="Phone Number"
                        type="number"
                        name="phone"
                        onChange={formik.handleChange("phone")}
                        value={formik.values.phone}
                      />
                    </div>

                    <div className="input-group my-5">
                      <input
                        className="form-control "
                        placeholder="Amount"
                        type="number"
                        name="amount"
                        onChange={formik.handleChange("amount")}
                        value={formik.values.amount}
                      />
                    </div>

                    <div className="input-group my-5">
                      <input
                        className="form-control "
                        placeholder="Transaction ID"
                        type="text"
                        name="transactionID"
                        onChange={formik.handleChange("transactionID")}
                        value={formik.values.transactionID}
                      />
                    </div>

                    <button className="submit-btn" type="submit">
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
