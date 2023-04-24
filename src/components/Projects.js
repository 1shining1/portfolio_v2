import React from "react";
// import { Link } from "react-router-dom";
import Lists from "../components/ProjectDetail";

import { workLists } from "../constants/index";

const Projects = () => {
    return (
        <div id="projects" className="content">
            <h1 className="content-title">Projects</h1>
            <div>
                <div>
                    {workLists.map((workList, index) => (
                        <Lists
                            key={`workList-${index}`}
                            index={index}
                            {...workList}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
