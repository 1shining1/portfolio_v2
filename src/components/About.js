import React from "react";
import AboutImg from "../assets/about-img.jpg";
import MaterialIcon from "react-google-material-icons";

const About = () => {
    return (
        <div id="about" className="content">
            <div className="inner">
                <h2 className="content-title">About Me.</h2>
                <div className="text-wrap">
                    <div className="skills">
                        <ul>
                            <li>
                                <span className="em">2 years experience</span>{" "}
                                in Front-end Web Development at a software
                                company
                            </li>
                            <li>
                                Building{" "}
                                <span className="em">mobile applications</span>{" "}
                                and{" "}
                                <span className="em">responsive websites</span>{" "}
                                from scratch and implementing the code in{" "}
                                <span className="em">CMS</span>
                            </li>
                            <li>
                                Knowledge of{" "}
                                <span className="em">
                                    Web Content Accessibility Guidelines
                                </span>{" "}
                                and{" "}
                                <span className="em">HTML architecture</span> to
                                make web content more accessible
                            </li>
                            <li>
                                Designing with tools such as{" "}
                                <span className="em">Adobe Photoshop</span>,
                                <span className="em">Illustrator</span>,{" "}
                                <span className="em">XD</span>, and{" "}
                                <span className="em">Figma</span>
                            </li>
                            <li>
                                Building websites with{" "}
                                <span className="em">Python</span> using{" "}
                                <span className="em">Django</span> and{" "}
                                <span className="em">Flask</span>
                            </li>
                            <li>
                                Currently working with{" "}
                                <span className="em">React</span>{" "}
                                <a
                                    href="https://github.com/1shining1/portfolio_v2"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Opens in a new tab"
                                    className="link"
                                >
                                    Check out the GitHub repository for this
                                    React portfolio
                                    <MaterialIcon icon="south_east" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="chat">
                        <div>
                            <img src={AboutImg} alt="cute animal" />
                            <p className="t1">
                                "Enjoy trying new things, <br />
                                love cute animals"
                            </p>
                        </div>
                    </div>
                    {/* <p>
                    The main area of my expertise is front-end development with
                    HTML, CSS, and JavaScript, building apps and responsive
                    websites from scratch, and implementing the code in CMS. I
                    make websites with knowledge of Web Content Accessibility
                    Guidelines and HTML architecture to make web content more
                    accessible.
                </p>

                <p>
                    I have experience building websites with Python using Django
                    and Flask and designing with tools such as Adobe Photoshop,
                    Illustrator, XD, and Figma.
                </p>
                <p>React</p> */}
                </div>
            </div>
        </div>
    );
};

export default About;
