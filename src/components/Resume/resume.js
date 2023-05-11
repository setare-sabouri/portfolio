import React from "react";
import "./resume.css"
export const DownloadButton = ({ fileURL }) => {
    const downloadFile = () => {
        window.open(fileURL, "_blank");
    };

    return (
        <div className="container-resume">
            <button className="btn btn-primary" onClick={downloadFile}>
                Download CV
            </button>
        </div>
    );
};
