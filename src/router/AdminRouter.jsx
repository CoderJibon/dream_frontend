import AddPlan from "../pages/admin/AddPlan/AddPlan.jsx";
import Cashout from "../pages/admin/Cashout/Cashout.jsx";
import Commission from "../pages/admin/Commission/Commission.jsx";
import Complain from "../pages/admin/Complain/Complain.jsx";
import Deposit from "../pages/admin/Deposit/Deposit.jsx";
import HomePage from "../pages/admin/HomePage/HomePage.jsx";
import User from "../pages/admin/User/User.jsx";
import Work from "../pages/admin/Work/Work.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";

//Admin Router
const AdminRouter = [
  {
    path: "/admin",
    element: <HomePage></HomePage>,
  },
  {
    path: "deposit",
    element: <Deposit></Deposit>,
  },
  {
    path: "cashout",
    element: <Cashout></Cashout>,
  },
  {
    path: "plan",
    element: <AddPlan></AddPlan>,
  },
  {
    path: "user",
    element: <User></User>,
  },
  {
    path: "work",
    element: <Work></Work>,
  },
  {
    path: "commission",
    element: <Commission></Commission>,
  },
  {
    path: "support",
    element: <Complain></Complain>,
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
];

//export default AdminRouter
export default AdminRouter;
