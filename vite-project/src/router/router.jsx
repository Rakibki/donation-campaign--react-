import {createBrowserRouter} from "react-router-dom";
import MainLeyout from "../layout/MainLeyout";
import Donation from '../pages/donation/Donation'
import Home from '../pages/home/Home'
import Statistics from '../pages/statistics/Statistics'

const router = createBrowserRouter([
    {
      path: "/",
      element:  <MainLeyout />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/donation",
            element: <Donation />
        },
        {
            path: "/statistics",
            element: <Statistics />
        }
      ]
    },
]);


export default router