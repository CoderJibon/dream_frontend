import React, { useContext } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
const Profile = () => {
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

      <div className="profilecontainer">
        <div className="profilelogo">
          <img
            className="profileimg"
            src="https://cdn-icons-png.flaticon.com/512/147/147140.png"
            alt=""
          />
        </div>
        <div className="profiledata">
          <h1>Name : displayName</h1>
          <h1>Email : email</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
