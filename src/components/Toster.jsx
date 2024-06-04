import React, { useState, useEffect } from 'react';

const Toster = () => {
    const [showToast, setShowToast] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleClick = () => {
        setShowToast(true);
        setProgress(0); // Reset progress
        setTimeout(() => {
            setShowToast(false);
        }, 5000);
    };

    useEffect(() => {
        let timer;
        if (showToast) {
            timer = setInterval(() => {
                setProgress(prevProgress => prevProgress+20);
                console.log(progress)
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [showToast]);

    return (
        <>
            <button onClick={handleClick}>Tostify</button>
            {showToast && (
                <div style={toastStyle}>
                    <span>This is a toast</span>
                    <div style={{border:'2px solid white'}}>
                    <div style={progressBarStyle(progress)}></div></div>
                </div>
            )}
        </>
    );
};

const toastStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#333',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
};

const progressBarStyle = progress => ({
    width: `${progress}%`,
    height: '15px',
    background: '#4caf50',
    borderRadius: '5px',
    transition: 'width 1s linear',
    
});

export default Toster;

