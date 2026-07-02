import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import Home from "../pages/public/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} /> */}
            </Route>
        </Routes>
    );
};

export default AppRoutes;