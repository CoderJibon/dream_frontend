import { useDispatch, useSelector } from "react-redux";
import "./Plan.css";
import { Link } from "react-router-dom";
import { getAllPlan } from "../../../features/Plan/PlanApiSlice.js";
import { useEffect } from "react";
import toastify from "../../../utils/toastify.jsx";
import { setMessageEmpty } from "../../../features/Plan/PlanSlice.js";
import SyncLoader from "react-spinners/SyncLoader.js";
const Plan = () => {
  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, isLoading, plan } = useSelector(
    (state) => state.plan
  );
  //get all plan
  useEffect(() => {
    dispatch(getAllPlan());
  }, [dispatch]);

  // message loading
  useEffect(() => {
    if (isError) {
      toastify("error", isError);
      dispatch(setMessageEmpty());
    }
    if (message) {
      toastify("success", message);
      dispatch(setMessageEmpty());
    }
  }, [isError, message]);
  return (
    <div className="body">
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
                <h2>Plan</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="allplan">
        {plan &&
          plan.map((plan, idx) => (
            <div key={idx} className="plancontent">
              <div className="card-header">
                <h2 className="vip1">{plan?.name}</h2>
              </div>
              <div className="card-body">
                <div className="body-area">
                  <h2 className="vip1">Price: {plan?.price} BDT</h2>
                  <p>
                    Daily {plan?.dailyAdvertisement} Ads <br />
                    Daily Income {plan?.dailyIncome} BDT <br />
                    Validity {plan?.validity} days
                  </p>
                </div>
              </div>
              <div className="card-footer ">
                <button value="submit" className="planButton" type="submit">
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Plan;
