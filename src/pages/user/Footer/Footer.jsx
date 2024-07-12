import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="section">
      <footer>
        <div className="footerContainer">
          <div className="row">
            <div className="col-12">
              <div className="mobileFooter fixed-bottom">
                <Link to="/" className="f-icon homelink">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4999/4999606.png"
                    alt=""
                  />
                  <p>Home</p>
                </Link>
                <Link to="/transection" className="f-icon homelink">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1625/1625542.png"
                    alt=""
                  />
                  <p>Transection</p>
                </Link>
                <Link to="/totalearn" className="f-icon homelink">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/022/973/168/original/gift-card-flat-icon-shopping-gift-card-earn-points-redeem-present-box-concept-vector-illustration-png.png"
                    alt=""
                  />
                  <p>Total Earn</p>
                </Link>
                <Link to="/telegram" className="f-icon  homelink">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png"
                    alt=""
                  />
                  <p>Telegram</p>
                </Link>
                <Link to="/profile" className="f-icon homelink ">
                  <img
                    src="https://www.pngkey.com/png/full/966-9665347_icon-profile-circle.png"
                    alt=""
                  />
                  <p>Profile</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
