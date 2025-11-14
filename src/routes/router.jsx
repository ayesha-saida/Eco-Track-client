import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddIssues from "../pages/AddIssues";
import MyIssues from "../pages/MyIssues";
import Issues from "../pages/Issues";
import All_Issues from "../pages/All_Issues";
import MyContribution from "../pages/MyContribution";
import ErrorPage from "../pages/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import IssueDetails from "../pages/IssueDetails";
import Loading from "../components/Loading";
import { combineLoader } from "../loader/combineLoader";

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
    element: <PrivateRouter> <AddIssues /> </PrivateRouter>  ,
        },
   {
    path: "/my-issues",
    element: <PrivateRouter> <MyIssues /> </PrivateRouter>,
    loader: () => fetch('http://localhost:3000/issues'),
     hydrateFallbackElement: <Loading /> 
        },
   {
    path: "/issues",
    element: <Issues /> ,
        },
         {
    path: "/all-issues",
    element: <All_Issues /> ,
    loader: () => fetch('http://localhost:3000/issues'),
     hydrateFallbackElement: <Loading /> 
        },
   {
    path: "/issue-details/:id",
    element: ( <PrivateRouter> <IssueDetails /> </PrivateRouter> ),
    loader: combineLoader,
     hydrateFallbackElement: <Loading />
        },
   {
    path: "/my-contribution",
    element: <PrivateRouter> <MyContribution /> </PrivateRouter>,
        },
    ]
  },
  {
    path: "/*",
    element:<ErrorPage> </ErrorPage>
        },

]);
export default router