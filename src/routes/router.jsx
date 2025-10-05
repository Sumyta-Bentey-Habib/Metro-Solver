import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import About from "../pages/About";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>,
        children:[
            {
                index:true,
                element:<Home/>,

            },
            {
                path:'/about',
                element:<About/>,
            }
        ]
    },


]);
export default router;