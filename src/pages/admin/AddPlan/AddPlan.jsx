import React, { Fragment, useState } from "react";
import "../Custom.css";
import TopHeader from "../TopHeader/TopHeader.jsx";
function AddPlan(props) {
  const [adminPlan, setPlan] = useState({
    title: "",
    price: "",
    no_of_ads: "",
    daily_income: "",
    validity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlan((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitAdmin = (e) => {
    e.preventDefault();
    // axios.post("http://localhost:5000/api/plan/addPlanMyAdmin",adminPlan).then((res)=>{
    //     alert("Plan is saved");
    // }).catch((err)=>{
    //     alert("Some problem occur. /n Try later.")
    // })
  };

  return (
    <Fragment>
      <TopHeader name="Create a Plan"></TopHeader>
      <div className="mb-5 mt-4 adminLogin">
        <h4 className="title">Add new plan</h4>
        <form onSubmit={handleSubmitAdmin}>
          <label htmlFor="adminUser">Title</label>
          <br />
          <input
            className="inputField"
            name="title"
            required
            onChange={handleChange}
            value={adminPlan.title}
            type="text"
            placeholder="Enter title"
          />

          <label htmlFor="adminUser">Price</label>
          <br />
          <input
            className="inputField"
            name="price"
            required
            onChange={handleChange}
            value={adminPlan.price}
            type="number"
            placeholder="Enter price"
          />

          <label htmlFor="adminPassword">Number of ads</label>
          <br />
          <input
            className="inputField"
            name="no_of_ads"
            required
            onChange={handleChange}
            value={adminPlan.no_of_ads}
            type="number"
            placeholder="Enter number of ads"
          />
          <br />

          <label htmlFor="adminPassword">Daily income</label>
          <br />
          <input
            className="inputField"
            name="daily_income"
            required
            onChange={handleChange}
            value={adminPlan.daily_income}
            type="number"
            placeholder="Enter daily income"
          />
          <br />

          <label htmlFor="adminPassword">Validity</label>
          <br />
          <input
            className="inputField"
            name="validity"
            required
            onChange={handleChange}
            value={adminPlan.validity}
            type="number"
            placeholder="Enter validity"
          />
          <br />

          <button
            type="submit"
            className="btn-outline-light text-dark submitBtn"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mt-5"></div>
    </Fragment>
  );
}

export default AddPlan;
