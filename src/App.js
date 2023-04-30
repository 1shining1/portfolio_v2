import React, { useEffect, useState } from "react";
import ColorTheme from "./components/ColorTheme";
import Sns from "./components/Sns";

import { Link } from "react-router-dom";
import Location from "./routes";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function handleResize() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        }

        // Add event listener on component mount
        window.addEventListener("resize", handleResize);

        // Remove event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Simulate a delay for demonstration purposes
        const delay = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Clear the delay on unmount
        return () => clearTimeout(delay);
    }, []);

    return (
        <>
            {loading ? (
                <div className="loading">
                    <h1>
                        Cheonga
                        <br /> Yun
                    </h1>
                </div>
            ) : (
                <div className="container">
                    <div className="inner">
                        <div className="header">
                            <div className="logo">
                                <h1>
                                    Cheonga
                                    <br /> Yun
                                </h1>
                            </div>
                            <ColorTheme />
                        </div>

                        <div id="nav">
                            <ul>
                                <li>
                                    <Link to={`/portfolio_v2/`}>Home</Link>
                                </li>
                                <li>
                                    <Link to={`/portfolio_v2/about`}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/portfolio_v2/projects`}>
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/portfolio_v2/contact`}>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/portfolio_v2/test`}>
                                        list test
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Location />
                        <Sns />
                    </div>
                    <div className="bg-wrap">
                        <span className="c1"></span>
                        <span className="c2"></span>
                        <span className="c3"></span>
                        <span className="c4"></span>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
