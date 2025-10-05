import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import ServicesSection from "../pages/ServicesSection";

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
            },
            {
                path:'/services',
                element:<ServicesSection></ServicesSection>,
            }
        ]
    },


]);
export default router;