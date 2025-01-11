import React from 'react';
import { CircularProgress } from '@mui/material';
import './Loading.scss';

const Loading = () => {
    return (
        <div className="loading-container">
            <CircularProgress className="loading-spinner" />
        </div>
    );
}

export default Loading;
