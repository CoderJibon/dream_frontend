import { createBrowserRouter } from "react-router-dom";
import UserLayouts from "../Layouts/UserLayouts.jsx";
import AdminLayouts from "../Layouts/AdminLayouts.jsx";
import UserRouter from "./UserRouter.jsx";
import AuthRouter from "./AuthRouter.jsx";
import AdminRouter from "./AdminRouter.jsx";

//create app routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayouts />,
    children: [...UserRouter],
  },
  {
    path: "/admin",
    element: <AdminLayouts />,
    children: [...AdminRouter],
  },
  {
    path: "/",
    children: [...AuthRouter],
  },
]);
// export app routes
export default router;
