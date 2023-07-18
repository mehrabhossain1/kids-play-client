import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToy from "../Pages/SingleToy/SingleToy";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
    ],
  },
  {
    path: "toys",
    element: <AllToys></AllToys>,
  },
  {
    path: "toys/:id",
    element: (
      <PrivateRoute>
        <SingleToy></SingleToy>
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`),
  },
  {
    path: "add-toy",
    element: (
      <PrivateRoute>
        <AddToy></AddToy>
      </PrivateRoute>
    ),
  },
  {
    path: "myToys",
    element: (
      <PrivateRoute>
        <MyToys></MyToys>
      </PrivateRoute>
    ),
  },
  {
    path: "blogs",
    element: <Blogs></Blogs>,
  },
]);

export default router;
