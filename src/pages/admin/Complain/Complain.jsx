import React, { useEffect, useState } from "react";
import "../Custom.css";
import TopHeader from "../TopHeader/TopHeader.jsx";
function Complain(props) {
  const [complains, setComplains] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:5000/api/complain/allComplain").then((res) => {
    //     setComplains(res.data.complains);
    // }).catch((err) => {
    //     alert("Some problem occurred. Try again later.");
    // })
  }, []);

  return (
    <div className="cashout mt-3">
      <TopHeader name="Complain by Support Team"></TopHeader>
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Priority</th>
            <th>Message</th>
            <th>User Id</th>
          </tr>
        </thead>
        <tbody>
          {/* {Array.isArray(complains) && complains.map((data, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.subject}</td>
                        <td>{data.priority}</td>
                        <td>{data.message}</td>
                        <td>{data.userId}</td>
                    </tr>
                ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Complain;
