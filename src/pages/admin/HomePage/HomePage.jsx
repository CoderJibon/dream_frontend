import React, { useEffect } from "react";
// import "./AdminHome.css";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";

import deposit from "../icons/deposit.png";
import commission from "../icons/commission.png";
import Cashout from "../icons/chashout.png";
import plan from "../icons/planning.png";
import work from "../icons/working.png";
import support from "../icons/support.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/Auth/AuthApiSlice.js";
import toastify from "../../../utils/toastify.jsx";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isError, message, user, isLoading } = useSelector(
    (state) => state.auth
  );

  // log out administrators
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

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
    <>
      <section className="m-0 p-0">
        <div className="">
          <div className="">
            <div className="row">
              <div className="col-12">
                <div id="adminhome" className="all-content">
                  <div className="withicon">
                    <Link className="linktag" to="/admin/deposit">
                      <div className="iconPage">
                        <div className="icon-area">
                          <img src={deposit} className="iconImgCss" />
                        </div>
                        <span>Deposit</span>
                      </div>
                    </Link>
                  </div>
                  <div className="withicon">
                    <Link className="linktag" to="/admin/cashout">
                      <div className="iconPage">
                        <div className="icon-area">
                          <img src={Cashout} className="iconImgCss" />
                        </div>
                        <span>Cashout</span>
                      </div>
                    </Link>
                  </div>
                  <div className="withicon">
                    <Link className="linktag" to="/admin/plan">
                      <div className="iconPage">
                        <div className="icon-area">
                          <img src={plan} className="iconImgCss" />
                        </div>
                        <span>Plan</span>
                      </div>
                    </Link>
                  </div>
                  <div className="withicon">
                    <Link className="linktag" to="/admin/user">
                      <div className="iconPage">
                        <div className="icon-area">
                          <img
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/profile-6073860-4996977.png"
                            className="iconImgCss"
                          />
                        </div>
                        <span>Users</span>
                      </div>
                    </Link>
                  </div>
                  <div className="linktag">
                    <Link className="linktag" to="/admin/work">
                      <div className="iconPage">
                        <div className="icon-area">
                          <img src={work} className="iconImgCss" />
                        </div>
                        <span>works</span>
                      </div>
                    </Link>
                  </div>

                  <div className="linktag">
                    <Link className="linktag" to="/admin/commission">
                      <div className="iconPage">
                        <div className="icon-area">
                          <img src={commission} className="iconImgCss" />
                        </div>
                        <span>commission</span>
                      </div>
                    </Link>
                  </div>

                  <div className="linktag">
                    <Link className="linktag" to="/admin/support">
                      <div className="iconPage">
                        <div className="icon-area">
                          <img src={support} className="iconImgCss" />
                        </div>
                        <span>Supports</span>
                      </div>
                    </Link>
                  </div>

                  <div className="linktag">
                    <Link
                      to="/admin"
                      onClick={handleLogout}
                      className="linktag"
                    >
                      <div className="iconPage">
                        <div className="icon-area">
                          <img
                            src="https://png.pngtree.com/png-vector/20230409/ourmid/pngtree-password-icon-vector-png-image_6696962.png"
                            className="iconImgCss"
                          />
                        </div>
                        <span>Logout</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
