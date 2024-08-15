import { useDispatch, useSelector } from "react-redux";
import "./Plan.css";
import { Link } from "react-router-dom";
import { getAllPlan } from "../../../features/Plan/PlanApiSlice.js";
import { useEffect } from "react";
import toastify from "../../../utils/toastify.jsx";
import SyncLoader from "react-spinners/SyncLoader.js";
import { buyPlan } from "../../../features/Auth/AuthApiSlice.js";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
const Plan = () => {
  //dispatch via call api
  const dispatch = useDispatch();
  const { plan } = useSelector((state) => state.plan);
  const { isError, message, isLoading, user } = useSelector(
    (state) => state.auth
  );

  //get all plan
  useEffect(() => {
    dispatch(getAllPlan());
  }, [dispatch]);

  //buy plan
  const handleBuyPlan = ({ id }) => {
    dispatch(buyPlan({ plan: id }));
  };

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
      <div className="body">
        <h2 style={{ textAlign: "center" }}>Active Plan</h2>
        <table class="earntable">
          <thead>
            <tr>
              <th>Plan Name</th>
              <th>Plan Price</th>
              <th>Plan Validity</th>
            </tr>

            {user?.myPlan ? (
              <tr>
                <td>{user.myPlan.name}</td>
                <td>{user.myPlan.price}</td>
                <td>{user.myPlan.validity} Days</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="3">No Plan Available</td>
              </tr>
            )}
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <h2 style={{ textAlign: "center" }}>Buy A Plan</h2>
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
                <button
                  onClick={() => handleBuyPlan({ id: plan._id })}
                  value="submit"
                  className="planButton"
                  type="submit"
                >
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
