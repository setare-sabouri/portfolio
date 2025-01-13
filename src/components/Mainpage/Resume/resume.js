import React from "react";
import "./resume.scss"
import resume from './resume.pdf'
export const Resume = ({ fileURL }) => {
    const downloadFile = () => {
        window.open(resume, "_blank");
    };

    return (
        <div >
            <button className="btn btn-primary" onClick={downloadFile}>
                Download CV
            </button>
        </div>
    );
};
