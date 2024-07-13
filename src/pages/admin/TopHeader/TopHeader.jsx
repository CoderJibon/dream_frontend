import React from "react";
import { Link } from "react-router-dom";

const TopHeader = ({ name = "" }) => {
  return (
    <>
      <header style={{ margin: "20px" }} className="diposits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="diposit-header">
                <Link to="/admin">
                  <i className="bi bi-chevron-left"></i>
                </Link>
                <h2>{name}</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopHeader;
