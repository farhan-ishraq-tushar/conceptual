import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import MyAppointments from "../components/MyAppointments/MyAppointments";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // fetching  data
                loader: async ()=> {
                    const servicesRes = await fetch("/service.json");
                    const servicesData = await servicesRes.json();

                    const feedBackRes = await fetch("/happyclients.json");
                    const feedBackData = await feedBackRes.json();

                    return {servicesData, feedBackData};
                }
            },
            {
                path: "/all-treatments",
                element: <AllTreatments></AllTreatments>,
                // fetching service data
                loader: ()=> fetch("/service.json")
            },
            {
                path: "/my-appointments",
                element: <MyAppointments></MyAppointments>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader:async({params})=>{
                     const res = await fetch("/service.json");
                     const data = await res.json();
                    //  console.log(data, params.id);
                     const singleData = data.find(d=>d.id == params.id);
                    //  console.log(singleData);
                     return singleData; 

                }
            }
        ]
    }
])

export default router;