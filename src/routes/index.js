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
                <Route path="/hello" element={<h1>Hello</h1>}></Route>
                <Route
                    path={`${process.env.PUBLIC_URL}/about`}
                    element={<About />}
                ></Route>
                <Route
                    path={`${process.env.PUBLIC_URL}/projects`}
                    element={<Projects />}
                ></Route>
                <Route
                    path={`${process.env.PUBLIC_URL}/project_detail/:index/`}
                    element={<RealDetail />}
                ></Route>
                <Route
                    path={`${process.env.PUBLIC_URL}/contact`}
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
