import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import TopNavbar from "../component/utils/TopNavbar/TopNavbar";

const MainLayOut = () => {
    return (
        <div>
            <TopNavbar />
            <Navbar />
            <div className=" min-h-[calc(100vh-316px)]">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayOut;