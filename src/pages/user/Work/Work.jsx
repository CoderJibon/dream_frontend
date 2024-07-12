import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Work.css";

const Work = () => {
  const [works, setWork] = useState([]);
  let noWork = false;
  useEffect(() => {
    // if(userId){
    //     axios.get("http://localhost:5000/api/plan/allPlan", {
    //         headers: {
    //             "userid": userId
    //         }
    //     })
    //         .then((res) => {
    //             noWork = false;
    //             setWork(res.data.plans);
    //         })
    //         .catch((err) => {
    //             noWork = true;
    //             alert("No plans found.");
    //         });
    // } else {
    //     alert("Try later.");
    // }
  }, []);

  const updatePlan = (data) => {
    // const id = data.id;
    // axios.post("http://localhost:5000/api/plan/updateBalanceByPlan",null,{
    //     headers: {
    //         "userid":userId,
    //         "planid":id,
    //     }
    // }).then((res)=>{
    //     alert(res.data.message);
    // }).catch((err)=>{
    //     alert("Please try later.");
    // })
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
                </Link>{" "}
                <h2>Work</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="total-body-area p-3">
        <div className="workcontainer">
          <div className="workflex" key={""}>
            <div className="wflexcol1">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDm0UHQCQhPHtw4D0r3Ey7gd6oRWqqq12k2V-S5kx_gnYk_O9W-fnEOQVbc1CMrJeFIAI&amp;usqp=CAU"
                className="workimg"
              />
              <p>Advertisement for 120TK</p>
            </div>
            <div className="wflexcol2">
              <button onClick={() => updatePlan(work)} className="clickbtn">
                Click Ad
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
