import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToy from "../Pages/SingleToy/SingleToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "toys/:id",
        element: <SingleToy></SingleToy>,
        loader: ({ params }) =>
          fetch(`http://localhost:8800/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
