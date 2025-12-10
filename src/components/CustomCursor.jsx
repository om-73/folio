import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailing, setTrailing] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
            document.addEventListener("mouseover", onMouseOver);
            document.addEventListener("mouseout", onMouseOut);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mouseover", onMouseOver);
            document.removeEventListener("mouseout", onMouseOut);
        };

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
            // Trailing effect logic handled in animation loop or separate effect
            // specific logic below
        };

        const onMouseDown = () => {
            setIsClicking(true);
        };

        const onMouseUp = () => {
            setIsClicking(false);
        };

        const onMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            }
        };

        const onMouseOut = () => {
            setIsHovering(false);
        };

        addEventListeners();
        return () => removeEventListeners();
    }, []);

    // Smooth trailing effect
    useEffect(() => {
        let requestRef;

        const animateTrailing = () => {
            setTrailing(prev => {
                const dx = position.x - prev.x;
                const dy = position.y - prev.y;
                return {
                    x: prev.x + dx * 0.15,
                    y: prev.y + dy * 0.15
                };
            });
            requestRef = requestAnimationFrame(animateTrailing);
        };

        requestRef = requestAnimationFrame(animateTrailing);
        return () => cancelAnimationFrame(requestRef);
    }, [position]);

    // Hide cursor on mobile or if functionality unavailable
    if (typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            <div
                className={`cursor-dot ${isVisible ? 'visible' : ''} ${isHovering ? 'hover' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className={`cursor-ring ${isVisible ? 'visible' : ''} ${isClicking ? 'clicking' : ''} ${isHovering ? 'hover' : ''}`}
                style={{ left: `${trailing.x}px`, top: `${trailing.y}px` }}
            />
        </>
    );
};

export default CustomCursor;
