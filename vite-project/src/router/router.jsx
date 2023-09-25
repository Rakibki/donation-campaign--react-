import {createBrowserRouter} from "react-router-dom";
import MainLeyout from "../layout/MainLeyout";
import Donation from '../pages/donation/Donation'
import Home from '../pages/home/Home'
import Statistics from '../pages/statistics/Statistics'
import Error from "../pages/error/Error";
import CardDetails from "../components/cardDetails/CardDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element:  <MainLeyout />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Home />,
        }, 
        {
            path: "/donation",
            element: <Donation />,
        },
        {
            path: "/statistics",
            element: <Statistics />
        },
        {
          path: "/card/:id",
          element: <CardDetails />,
        }
      ]
    },
]);


export default router