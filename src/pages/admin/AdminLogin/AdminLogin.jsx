import React, { Fragment, useState } from "react";
import "../Custom.css";
import { useNavigate } from "react-router-dom";

function AdminLogin(props) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.get("http://localhost:5000/api/admin/auth",{
    //     headers: {
    //         "username":user.name,
    //         "userpassowrd":user.password
    //     }
    // }).then((res)=>{
    //     console.log(res.data)
    //     if(res.data===1){
    //         localStorage.setItem("adminAuthentic","true");
    //         navigate("/admin/adminNav");
    //     }
    //     else{
    //         alert("User name or password not matche.")
    //     }
    // }).catch((err)=>{

    // })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <div className="mb-5 mt-4 adminLogin">
        <form>
          <label htmlFor="adminUser">Enter admin user name</label>
          <br />
          <input
            className="inputField"
            name="name"
            required
            onChange={handleChange}
            value={user.name}
            type="text"
            placeholder="Admin user"
          />

          <label>Admin password</label>
          <br />
          <input
            className="inputField"
            name="password"
            required
            onChange={handleChange}
            value={user.password}
            type="password"
            placeholder="Admin password"
          />
          <br />
          <button
            onClick={handleSubmit}
            className="btn-outline-light text-dark submitBtn"
          >
            submit
          </button>
        </form>
      </div>
      <div className="mt-5"></div>
    </Fragment>
  );
}

export default AdminLogin;
