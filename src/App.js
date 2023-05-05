import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "react-google-material-icons";

import ColorTheme from "./components/ColorTheme";
import Sns from "./components/Sns";
import Location from "./routes";

function App() {
    const [loading, setLoading] = useState(true);

    // mobile menu
    const [isOpen, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu((isOpen) => !isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.querySelector(".mobile-menu-bg").style.display = "block";
        } else {
            document.body.style.overflow = "";
            document.querySelector(".mobile-menu-bg").style.display = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.querySelector(".mobile-menu-bg").style.display = "";
        };
    }, [isOpen]);

    useEffect(() => {
        function handleResize() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 2000);

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
                                <Link to={`/portfolio_v2/`}>
                                    <h1>
                                        Cheonga
                                        <br /> Yun
                                    </h1>
                                </Link>
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
                                </ul>
                            </div>
                            <ColorTheme />
                            <button
                                onClick={() => toggleMenu()}
                                className="menu-btn"
                            >
                                <MaterialIcon icon="menu" />
                            </button>
                            <div
                                className={`mobile-nav ${
                                    isOpen ? "show-menu" : "hide-menu"
                                }`}
                            >
                                <div className="menu-top">
                                    <Sns />
                                    <button
                                        onClick={() => toggleMenu()}
                                        className="close-btn"
                                    >
                                        <MaterialIcon icon="close" />
                                    </button>
                                </div>
                                <ul>
                                    <li>
                                        <Link
                                            to={`/portfolio_v2/`}
                                            onClick={() => toggleMenu()}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/portfolio_v2/about`}
                                            onClick={() => toggleMenu()}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/portfolio_v2/projects`}
                                            onClick={() => toggleMenu()}
                                        >
                                            Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/portfolio_v2/contact`}
                                            onClick={() => toggleMenu()}
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <Location />
                        <Sns />
                        <div className="mobile-menu-bg"></div>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
