import React from "react";
import Home from "../pages/user/Home/Home.jsx";
import Deposite from "../pages/user/Deposite/Deposite.jsx";
import Cashout from "../pages/user/Cashout/Cashout.jsx";
import Plan from "../pages/user/Plan/Plan.jsx";
import Work from "../pages/user/Work/Work.jsx";
import TotalEarn from "../pages/user/TotalEarn/TotalEarn.jsx";
import Commision from "../pages/user/Commision/Commision.jsx";
import CHistory from "../pages/user/CHistory/CHistory.jsx";
import DHistory from "../pages/user/DHistory/DHistory.jsx";
import Job from "../pages/user/Job/Job.jsx";
import Support from "../pages/user/Support/Support.jsx";
import Complaint from "../pages/user/Complaintbox/Complaint.jsx";
import Profile from "../pages/user/Profile/Profile.jsx";
import Transection from "../pages/user/Transection/Transection.jsx";
import PrivateGard from "./PrivateGard.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import ChangePassword from "../pages/user/ChangePassword/ChangePassword.jsx";
const UserRouter = [
  {
    element: <PrivateGard />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/deposite",
        element: <Deposite></Deposite>,
      },
      {
        path: "/cashout",
        element: <Cashout></Cashout>,
      },

      {
        path: "/plan",
        element: <Plan></Plan>,
      },
      {
        path: "/work",
        element: <Work></Work>,
      },
      {
        path: "/totalearn",
        element: <TotalEarn></TotalEarn>,
      },
      {
        path: "/commission",
        element: <Commision></Commision>,
      },
      {
        path: "/chistory",
        element: <CHistory></CHistory>,
      },
      {
        path: "/dhistory",
        element: <DHistory></DHistory>,
      },
      {
        path: "/job",
        element: <Job></Job>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/complaint",
        element: <Complaint></Complaint>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/transection",
        element: <Transection></Transection>,
      },
      {
        path: "/changePassword",
        element: <ChangePassword />,
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
    ],
  },
];

export default UserRouter;
