import { Outlet } from "react-router-dom";
import Header from "./header";

const MainLayout = () => {
    return (
        <div className="bg-slate-950 flex">
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;