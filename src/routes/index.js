import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import RealDetail from "../components/RealDetail";
import Contact from "../components/Contact";

const Location = () => {
    return (
        <>
            <Routes>
                <Route path="/portfolio_v2/" element={<Home />}></Route>
                <Route path="/portfolio_v2/about" element={<About />}></Route>
                <Route
                    path="/portfolio_v2/projects"
                    element={<Projects />}
                ></Route>
                <Route
                    path="/portfolio_v2/project_detail/:id/"
                    element={<RealDetail />}
                ></Route>
                <Route
                    path="/portfolio_v2/contact"
                    element={<Contact />}
                ></Route>

                <Route
                    path={`${process.env.PUBLIC_URL}/`}
                    element={<Home />}
                ></Route>
            </Routes>
        </>
    );
};

export default Location;
