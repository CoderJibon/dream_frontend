import "./Cashout.css";
import { Link } from "react-router-dom";
//form handling for
import { useFormik } from "formik";
import * as Yup from "yup";
import SyncLoader from "react-spinners/SyncLoader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toastify from "../../../utils/toastify.jsx";
import { createCashout } from "../../../features/Auth/AuthApiSlice.js";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
const Cashout = () => {
  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, isLoading } = useSelector((state) => state.auth);

  //validation schema
  const schema = Yup.object().shape({
    amount: Yup.number().required("amount is required"),
    note: Yup.string(),
    accountNumber: Yup.string().required("phone is required"),
    method: Yup.string().required("method is required"),
  });

  // from handlers
  const formik = useFormik({
    initialValues: {
      amount: "",
      note: "",
      accountNumber: "",
      method: "",
    },
    validationSchema: schema,
    onSubmit: (value) => {
      console.log(value);
      dispatch(createCashout(value));
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
                </Link>{" "}
                <h2>Cashout</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card shadow">
                <div className="card-body">
                  <div className="divshadow">
                    <h3>
                      Minimum Investment is 500 BDT, Maximum Investment is 30000
                      BDT
                    </h3>
                  </div>

                  <div className="gatwaydivshadow">
                    <div className="container mt-3 getway "></div>

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
                            placeholder="Account Number"
                            type="number"
                            name="accountNumber"
                            onChange={formik.handleChange("accountNumber")}
                            value={formik.values.accountNumber}
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
                            className="form-control seletctGetwaymethord"
                            id="note"
                            placeholder="Note"
                            type="text"
                            name="note"
                            onChange={formik.handleChange("note")}
                            value={formik.values.note}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cashout;
