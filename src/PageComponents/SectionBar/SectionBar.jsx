import React from "react";
import "./SectionBar.css";
import { Link } from "react-router-dom";
const SectionBar = () => {
  return (
    <div className="section">
      <section>
        <div className="all-content">
          <div className="withicon">
            <Link className="linktag" to="/deposite">
              <div className="iconPage">
                <div className="icon-area">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5304/5304640.png"
                    className="iconImgCss"
                  />
                </div>
                <span className="sectionName">Deposit</span>
              </div>
            </Link>
          </div>
          <div className="withicon">
            <Link className="linktag" to="/cashout">
              <div className="iconPage">
                <div className="icon-area">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5501/5501360.png"
                    className="iconImgCss"
                  />
                </div>
                <span className="sectionName">Cashout</span>
              </div>
            </Link>
          </div>
          <div className="withicon">
            <Link className="linktag" to="/work">
              <div className="iconPage">
                <div className="icon-area">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3774/3774905.png"
                    className="iconImgCss"
                  />
                </div>
                <span className="sectionName">Work</span>
              </div>
            </Link>
          </div>
          <div className="withicon">
            <Link className="linktag" to="/totalearn">
              <div className="iconPage">
                <div className="icon-area">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/022/973/168/original/gift-card-flat-icon-shopping-gift-card-earn-points-redeem-present-box-concept-vector-illustration-png.png"
                    className="iconImgCss"
                  />
                </div>
                <span className="sectionName">Total Earn</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="all-content mt-2">
          <div className="withicon">
            <Link className="linktag" to="/plan">
              <div className="iconPage">
                <div className="icon-area">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/9398/9398952.png"
                    className="iconImgCss"
                  />
                </div>
                <span className="sectionName">Plan</span>
              </div>
            </Link>
          </div>
          <div className="withicon">
            <Link className="linktag" to="/commission">
              <div className="iconPage">
                <div className="icon-area">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/10496/10496522.png"
                    className="iconImgCss"
                  />
                </div>
                <span className="sectionName">Commission</span>
              </div>
            </Link>
          </div>
          <div className="withicon">
            <Link className="linktag" to="/job">
              <div className="iconPage">
                <div className="icon-area">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/004/968/602/small/new-email-notification-on-mobile-phone-device-or-smartphone-concept-illustration-flat-design-eps10-vector.jpg"
                    className="iconImgCss"
                  />
                </div>
                <span className="sectionName">Job</span>
              </div>
            </Link>
          </div>
          <div className="withicon">
            <Link className="linktag" to="/support">
              <div className="iconPage">
                <div className="icon-area">
                  <img
                    src="https://www.iconpacks.net/icons/2/free-chat-support-icon-1721-thumb.png"
                    className="iconImgCss"
                  />
                </div>
                <span className="sectionName">Support</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionBar;
