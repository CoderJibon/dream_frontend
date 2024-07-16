import { Link } from "react-router-dom";
import "./Work.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllWork } from "../../../features/Work/WorkApiSlice.js";
import { useEffect, useState } from "react";
import toastify from "../../../utils/toastify.jsx";
import SyncLoader from "react-spinners/SyncLoader.js";
import {
  getAllTimestamp,
  getTimestamp,
  updateTimestamp,
  userEarning,
} from "../../../features/Auth/AuthApiSlice.js";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
const Work = () => {
  //dispatch via call api
  const dispatch = useDispatch();
  const { work } = useSelector((state) => state.work);
  const { isError, message, isLoading, user, Timestamp24 } = useSelector(
    (state) => state.auth
  );

  //get all work
  useEffect(() => {
    dispatch(getAllWork());
    dispatch(getAllTimestamp());
  }, [dispatch]);

  // Check if the ad is already taken and expired then remove the data
  useEffect(() => {
    if (Timestamp24?.length > 0) {
      console.log(Timestamp24);
      Timestamp24.forEach((ad) => {
        if (ad?.adID !== work._id) {
          console.log(ad?.adID !== work._id);
          dispatch(getTimestamp({ token: ad.token24h }));
        }
      });
    }
  }, [dispatch, Timestamp24]);

  //get user Earning
  const handleEarnBtn = ({ name, id }) => {
    dispatch(userEarning({ name: name }));
    dispatch(updateTimestamp(id));
  };

  // message loading
  useEffect(() => {
    if (isError) {
      toastify("error", isError);
      dispatch(setMessageEmpty());
    }
    if (message) {
      toastify("success", message);
      dispatch(setMessageEmpty());
    }
  }, [isError, message, dispatch]);

  return (
    <div className="section">
      <SyncLoader
        color={"#4CAF50"}
        loading={isLoading}
        cssOverride={{ position: "fixed", top: "50%", left: "50%" }}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <header className="diposits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="diposit-header">
                <Link to="/">
                  <i className="bi bi-chevron-left"></i>
                </Link>
                <h2>Work</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="total-body-area p-3">
        {work &&
          work.map((w, idx) => {
            // Check if this work ID exists in the user's Timestamp24
            const isDisabled = Timestamp24.some((ad) => ad.adID === w._id);

            return (
              <div key={idx} className="workcontainer">
                <div className="workflex">
                  <div className="wflexcol1">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDm0UHQCQhPHtw4D0r3Ey7gd6oRWqqq12k2V-S5kx_gnYk_O9W-fnEOQVbc1CMrJeFIAI&amp;usqp=CAU"
                      className="workimg"
                    />
                    <p>{w.name}</p>
                  </div>
                  <div className="wflexcol2">
                    <button
                      onClick={() => handleEarnBtn({ name: w.name, id: w._id })}
                      className="clickbtn"
                      disabled={isDisabled}
                      style={{ backgroundColor: isDisabled ? "#ccc" : "" }}
                    >
                      Click Ad
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Work;
