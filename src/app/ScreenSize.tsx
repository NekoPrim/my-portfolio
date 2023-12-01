import { useState, useEffect } from 'react';

export function ScreenSize() {
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const useSize = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        window.addEventListener('resize', useSize);

        return() => {
            window.removeEventListener('resize', useSize);
        }
    }, [windowDimension]);

    return{
        windowDimension
    };
};