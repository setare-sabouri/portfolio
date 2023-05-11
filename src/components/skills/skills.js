import React from "react";
import skillsData from "../../SkillsData";
import "./skills.css"
export const Skills = () => {
    return (
        <div className="container ">
            <h2 className="text-center mb-4">Skills</h2>
            <div className="row">
                {skillsData.map((skill, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{skill.name}</h5>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${skill.percentage}%` }}
                                        aria-valuenow={skill.percentage}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        {skill.percentage}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};