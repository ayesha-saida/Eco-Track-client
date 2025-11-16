import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddIssues from "../pages/AddIssues";
import MyIssues from "../pages/MyIssues";
import All_Issues from "../pages/All_Issues";
import MyContribution from "../pages/MyContribution";
import ErrorPage from "../pages/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import IssueDetails from "../pages/IssueDetails";
import Loading from "../components/Loading";
import { combineLoader } from "../loader/combineLoader";
import { loaderToContribute } from "../loader/LoaderToContribute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
   {
    path: "/",
    element: <Home />  ,
     loader: () => fetch('https://eco-track-server-chi.vercel.app/issues'),
     hydrateFallbackElement: <Loading />
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
    loader: () => fetch('https://eco-track-server-chi.vercel.app/issues'),
     hydrateFallbackElement: <Loading /> 
        },
         {
    path: "/all-issues",
    element: <All_Issues /> ,
    loader: () => fetch('https://eco-track-server-chi.vercel.app/issues'),
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
     loader: loaderToContribute,
     hydrateFallbackElement: <Loading />
        },
    ]
  },
  {
    path: "/*",
    element:<ErrorPage> </ErrorPage>
        },

]);
export default router