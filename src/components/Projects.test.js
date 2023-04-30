import React from "react";
import TestList from "../components/ProjectList.test";

import { workLists } from "../constants/index";

const TestProjects = () => {
    return (
        <div id="test_project_list" className="content">
            {/* <h1 className="content-title">Projects</h1> */}
            <div className="textBox">
                <span>Mobile applications</span>
                <span>Responsive Websites</span>
            </div>
            <div className="list">
                {workLists.map((workList, index) => (
                    <TestList
                        key={`workList-${index}`}
                        index={index}
                        {...workList}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestProjects;
