import React from "react";
import TestList from "../components/ProjectList.test";

import { workLists } from "../constants/index";

const TestProjects = () => {
    return (
        <div id="test_project_list" className="content">
            {/* <h1 className="content-title">Projects</h1> */}
            <div className="list-wrap">
                <div className="left">
                    <p>Mobile applications, Responsive Websites</p>
                </div>
                <div className="right">
                    {workLists.map((workList, index) => (
                        <TestList
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
