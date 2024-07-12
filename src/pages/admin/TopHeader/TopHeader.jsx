import React from "react";
import { Link } from "react-router-dom";

const TopHeader = ({ name = "" }) => {
  return (
    <>
      <header style={{ margin: "20px" }} class="diposits">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="diposit-header">
                <Link to="/admin">
                  <i class="bi bi-chevron-left"></i>
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
