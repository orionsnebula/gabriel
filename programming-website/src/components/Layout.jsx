import { Link, Outlet } from 'react-router-dom';
import Navbar from "./Navbar";

const Layout = () => {


    return (<>
        <div class="w-350 h-215 ml-65 mt-7 bg-[#f2f7fa] z-0">
            <div class="bg-[#e0e8eb] w-260 h-200 ml-7 mt-7 absolute">
                <Outlet />
            </div>

            <div>
                <Navbar />

            </div>
        </div>
    </>);
}

export default Layout;