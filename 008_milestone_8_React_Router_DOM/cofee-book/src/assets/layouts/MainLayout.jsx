import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div>
        <Toaster></Toaster>
        {/* Navbar */}
        <div className="h-16">
            <Navbar></Navbar>
        </div>

        <div className="min-h-[calc(100vh-292px)] py-12 container mx-auto px-12">

            {/* Dynamic content will be shown inside outlet */}
            <Outlet></Outlet>
            
        </div>

        {/* Dynamic section */}

        {/* Footer */}
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;