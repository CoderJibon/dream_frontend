import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Complaint.css";

const Complaint = () => {
  const userId = localStorage.getItem("userId");
  const [complain, setComplain] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "High",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplain((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post("http://localhost:5000/api/complain/addComplain", complain, {
    //     headers: {
    //         "userid": userId
    //     }
    // }).then((res) => {
    //     alert("Your complaint has been received.");
    // }).catch((err) => {
    //     alert("Please try again later.");
    // });
  };

  return (
    <div className="section">
      <header class="diposits">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="diposit-header">
                <Link to="/support">
                  <i class="bi bi-chevron-left"></i>
                </Link>{" "}
                <h2>Complaint</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="conplaintfrom">
        <form>
          <div className="complaintdiv1">
            <label>
              {" "}
              <span>Name</span>
              <input
                required
                onChange={handleChange}
                defaultValue={""}
                className="complaininput"
                type="text"
                name="name"
                value={complain.name}
                id=""
              />
            </label>

            <label>
              <span>Email</span>
              <input
                required
                className="complaininput"
                defaultValue={""}
                type="email"
                onChange={handleChange}
                value={complain.email}
                name="email"
                id=""
              />
            </label>
          </div>
          <div className="complaintdiv1">
            <label>
              <span>Subject</span>
              <input
                required
                className="complaininput"
                type="text"
                onChange={handleChange}
                value={complain.subject}
                name="subject"
                id=""
              />
            </label>

            <label>
              {" "}
              <span>Priority</span>
              <select
                onChange={handleChange}
                value={complain.priority}
                name="priority"
                id="method"
                className="complaininput"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
          </div>
          <label>
            <span className="complanspan">Massage</span>
            <textarea
              required
              className="complaintarea"
              onChange={handleChange}
              value={complain.message}
              name="message"
              id=""
            ></textarea>
          </label>
          <label>
            <span className="complanspan">Attachments</span>
            <input
              style={{ height: "auto", paddingLeft: 0 }}
              required
              className="complaininput"
              type="file"
              onChange={handleChange}
              value={complain.subject}
              name="attachments"
              id=""
            />
          </label>
          <button
            style={{ marginTop: 10 }}
            type="submit"
            onClick={handleSubmit}
            className="complainbutton"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Complaint;
