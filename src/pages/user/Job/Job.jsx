import { Link } from "react-router-dom";
import { FaCopy } from "react-icons/fa6";
import "./Job.css";
import { useSelector } from "react-redux";
import { rootUrl } from "../../../utils/baseUrl.js";

const Job = () => {
  const { isError, message, isLoading, user } = useSelector(
    (state) => state.auth
  );
  const copyLink = (e) => {
    e.preventDefault();
    const copyText = document.querySelector(".jobinput");
    copyText.select();
    document.execCommand("copy");
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
                <h2>Job</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="jobcontent">
        <h6>My Referrals Referral Link</h6>
      </div>
      <form className="refflex">
        <input
          name="copyField"
          type="text"
          className="jobinput"
          readOnly
          defaultValue={`${rootUrl}/signup/${
            user && user.userName
          }`}
        />
        <button onClick={copyLink} className="refbutton">
          <FaCopy size={15} />
        </button>
      </form>
    </div>
  );
};

export default Job;
