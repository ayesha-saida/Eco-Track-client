import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddIsuues from "../pages/AddIsuues";
import MyIssues from "../pages/MyIssues";
import Issues from "../pages/Issues";
import All_Issues from "../pages/All_Issues";
import MyContribution from "../pages/MyContribution";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
   {
    path: "/",
    element: <Home />  ,
        },
    {
    path: "/register",
    element: <Register /> ,
        },
   {
    path: "/login",
    element: <Login />   ,
        },
   {
    path: "/add-issues",
    element: <AddIsuues /> ,
        },
   {
    path: "/my-issues",
    element: <MyIssues /> ,
        },
   {
    path: "/issues",
    element: <Issues /> ,
        },
   {
    path: "/all-issues",
    element: <All_Issues /> ,
        },
   {
    path: "/my-contribution",
    element: <MyContribution /> 
        },
    ]
  },
  {
    path: "/*",
    element:<ErrorPage> </ErrorPage>
        },

]);
export default router