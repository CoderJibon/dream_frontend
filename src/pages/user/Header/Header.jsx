import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  //get user
  const { isError, message, user, isLoading } = useSelector(
    (state) => state.auth
  );

  const [ok, setOk] = useState(false);
  const [css, setCss] = useState({
    text: "balancebar",
    balance: "hideBalance",
  });

  const showBalance = (e) => {
    if (!ok) {
      setCss({
        balance: "showBalance",
        text: "noneText",
      });
    } else {
      setCss({
        text: "balancebar",
        balance: "hideBalance",
      });
    }
    setOk(!ok);
  };
  return (
    <div className="section">
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="username">
              <h3 className="">{user && user?.name}</h3>
            </div>
            <div className="header-info">
              <div className="thumbnils-img">
                {user && user?.photo ? (
                  <img src={user?.photo} alt="" />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/147/147140.png"
                    alt=""
                  />
                )}
              </div>

              <div onClick={showBalance} className="check-balance">
                <div className="balance-icons">
                  <div className="balance-icon">
                    <i className="bi bi-currency-dollar icon-style"></i>
                    <span className={css.text}>Tap for Balance</span>
                    <div className={css.balance} id="balanceAmounts">
                      {user && user?.myBalance} TK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
