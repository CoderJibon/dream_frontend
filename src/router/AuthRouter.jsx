import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import Forgate from "../pages/user/ForgetPassword/Forgate.jsx";
import Login from "../pages/user/Login/Login.jsx";
import ResedPassword from "../pages/user/ResedPassword/ResedPassword.jsx";
import Resendmail from "../pages/user/Resendmail/Resendmail.jsx";
import Signup from "../pages/user/Signup/Signup.jsx";
import PublicGard from "./PublicGard.jsx";

//auth Router
const AuthRouter = [
  {
    element: <PublicGard />,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/login/:token",
        element: <Login></Login>,
      },
      {
        path: "/resend",
        element: <Resendmail></Resendmail>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signup/:ref",
        element: <Signup></Signup>,
      },
      {
        path: "/forgot",
        element: <Forgate></Forgate>,
      },
      {
        path: "/resetpassword",
        element: <ResedPassword></ResedPassword>,
      },
      {
        path: "/resetpassword/:token",
        element: <ResedPassword></ResedPassword>,
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
    ],
  },
];

//export default AuthRouter
export default AuthRouter;
