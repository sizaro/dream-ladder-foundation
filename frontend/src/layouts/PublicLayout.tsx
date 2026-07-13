import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const PublicLayout = () => {
    return (
        <>
            <Navbar />

            <main className="pt-[72px]">
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default PublicLayout;