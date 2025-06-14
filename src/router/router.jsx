import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobsDetails/JobDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import JobApply from "../Pages/JobApply/JobApply";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: '/jobs/:id',
          Component: JobDetails,
          loader: async({params}) =>{
            return await fetch(`http://localhost:5000/jobs/${params.id}`).then(res => res.json());
          }
        },
        {
          path: '/jobsApply/:id',
          element: <PrivateRoutes><JobApply></JobApply></PrivateRoutes>
        },
        {
          path: '/register',
          Component: Register
        },
        {
          path: '/signIn',
          Component: SignIn
        }
    ]
  },
]);

export default router;