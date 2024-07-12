import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Cashout from "../Cashout/Cashout.jsx";
import Deposit from "../Deposit/Deposit.jsx";
import Plan from "../Plan/Plan.jsx";
import AddPlan from "../AddPlan/AddPlan.jsx";
import Complain from "../Complain/Complain.jsx";
import "../Custom.css";
function AdminNav(props) {
  const items = [
    { id: 1, name: "Cashout" },
    { id: 2, name: "Deposit" },
    { id: 3, name: "Plan" },
    { id: 4, name: "Add Plan" },
    { id: 5, name: "Complains" },
    { id: 6, name: "Logout" },
  ];

  const [activeItem, setActiveItem] = useState(items[0]);

  const onSelectCurrentLink = (item) => {
    setActiveItem(item);
  };

  const handleLogout = () => {
    // localStorage.removeItem('adminAuthentic');
    // // Redirect to the "/admin" route
    // return <Navigate to="/admin" />;
  };

  return (
    <div className="cashout">
      <div className="adminNav">
        <div>
          <h2 style={{ textAlign: "center", color: "blue" }}>
            Dream Global International
          </h2>
          <hr />
        </div>
        <div className="tab_wrapper"></div>
      </div>
    </div>
  );
}

export default AdminNav;
