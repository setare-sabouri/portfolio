import React from "react";
import "./resume.scss"

export const DownloadButton = ({ fileURL }) => {
    const downloadFile = () => {
        window.open(fileURL, "_blank");
    };

    return (
        <div >
            <button className="btn btn-primary" onClick={downloadFile}>
                Download CV
            </button>
        </div>
    );
};
