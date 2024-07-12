import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Link to={"/"}>
        <img
          style={{ width: "100%" }}
          src="https://i.ibb.co/4RC4tzG/notfoundpage.jpg"
          alt=""
        />
      </Link>
    </>
  );
};

export default NotFoundPage;
