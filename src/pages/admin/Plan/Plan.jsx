import React, { useEffect, useState } from "react";

function Plan(props) {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:5000/api/plan/getAll").then((res)=>{
    //     setPlans(res.data.plans);
    // }).catch((err)=>{
    // })
  }, []);

  return (
    <div className="cashout mt-3">
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Title</th>
            <th>Price</th>
            <th>No_of_ads</th>
            <th>Daily_income</th>
            <th>Validity</th>
          </tr>
        </thead>
        <tbody>
          {/* {
                    Array.isArray(plans) && plans && plans.map((data, idx) => (
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{data.title}TK</td>
                            <td>{data.price}TK</td>
                            <td>{data.no_of_ads}</td>
                            <td>{data.daily_income}TK</td>
                            <td>{data.validity} Days</td>
                        </tr>
                    ))
                } */}
        </tbody>
      </table>
    </div>
  );
}

export default Plan;
