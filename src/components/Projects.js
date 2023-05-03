import React from "react";
import List from "../components/ProjectList";

import { workLists } from "../constants/index";

const TestProjects = () => {
    return (
        <div id="project_list" className="content">
            {/* <h1 className="content-title">Projects</h1> */}
            <div className="list-wrap">
                <div className="left">
                    <p>
                        Mobile Applications,<span className="br"></span>{" "}
                        Responsive Websites
                    </p>
                </div>
                <div className="right">
                    {workLists.map((workList, index) => (
                        <List
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

export default TestProjects;
