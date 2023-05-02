import React, { useEffect, useState } from "react";
import MaterialIcon from "react-google-material-icons";

import ColorTheme from "./components/ColorTheme";
import Sns from "./components/Sns";

import { Link } from "react-router-dom";
import Location from "./routes";

function App() {
    const [loading, setLoading] = useState(true);
    const [isOpen, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정

    const toggleMenu = () => {
        setMenu((isOpen) => !isOpen); // on,off 개념 boolean
    };

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
                        </div>

                        <Location />
                        <Sns />
                    </div>
                    {/* <div className="bg-wrap">
                        <span className="c1"></span>
                        <span className="c2"></span>
                        <span className="c3"></span>
                        <span className="c4"></span>
                    </div> */}
                </div>
            )}
        </>
    );
}

export default App;
