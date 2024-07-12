import React, { useEffect, useState } from "react";
import "./Plan.css";
import { Link } from "react-router-dom";

const Plan = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:5000/api/plan/getAll").then((res)=>{
    //     setPlans(res.data.plans);
    // }).catch((err)=>{
    //     alert("Please try later.")
    // })
  }, []);

  const buyPlan = (plan) => {
    // if (userId) {
    //   const price = plan.price;
    //   const no_of_ads = plan.no_of_ads;
    //   const daily_income = plan.daily_income;
    //   const validity = 100;
    //   const checked = false;
    //     axios
    //       .post("http://localhost:5000/api/plan/createPlan", {
    //         price,
    //         no_of_ads,
    //         daily_income,
    //         validity,
    //         checked,
    //         userId,
    //       })
    //       .then((res) => {
    //         alert(res.data.message);
    //       })
    //       .catch((err) => {
    //         alert("Please try later.");
    //       });
    // } else {
    //   alert("Please logout and login.");
    // }
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
                <h2>Plan</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="allplan">
        {/* {plans &&
          plans.map((plan, idx) => ( */}
        <div className="plancontent">
          <div className="card-header">
            <h2 className="vip1">vip</h2>
          </div>
          <div className="card-body">
            <div className="body-area">
              <h2 className="vip1">Price: 500 BDT</h2>
              <p>
                Daily 1 Ads <br />
                Daily Income 150 BDT <br />
                Validity 100 days
              </p>
            </div>
          </div>
          <div className="card-footer ">
            <button
              value="submit"
              // onClick={() => buyPlan(plan)}
              className="planButton"
              type="submit"
            >
              BUY NOW
            </button>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};
export default Plan;
