import React from "react";
import Lists from "../components/ProjectList";

import { workLists } from "../constants/index";

const Projects = () => {
    return (
        <div id="projects" className="content">
            <h1 className="content-title">Projects</h1>
            <div className="list">
                {workLists.map((workList, index) => (
                    <Lists
                        key={`workList-${index}`}
                        index={index}
                        {...workList}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
