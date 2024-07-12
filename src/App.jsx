import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { useDispatch } from "react-redux";
import { loggedInUser } from "./features/Auth/AuthApiSlice.js";

//app
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(loggedInUser());
    }
  }, [dispatch]);
  return (
    <>
      {/* app router root path */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
//app export
export default App;
