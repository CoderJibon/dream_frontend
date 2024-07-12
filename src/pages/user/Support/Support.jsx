import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Support.css";
const Support = () => {
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
                <h2>Support</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="complan1">
        <Link to="/complaint">
          <button className="complanbtn">
            <FiPlus size={20} />
            New Tricket
          </button>
        </Link>
      </div>
      <div>
        <div class="container">
          <div class="row justify-content-center mt-4">
            <div class="col-md-12">
              <div class="card" id="cardstyle">
                <div class="card-body p-0">
                  <div class="table-responsive--sm">
                    <table class="table">
                      <thead class="thead" style={{ backGround: "crimson" }}>
                        <tr>
                          <th style={{ color: "#fff" }}>SL</th>
                          <th style={{ color: "#fff" }}>Subject</th>
                          <th style={{ color: "#fff" }}>Message</th>
                          <th style={{ color: "#fff" }}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="text-center">
                          <td colspan="100%">No Data Found!</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
