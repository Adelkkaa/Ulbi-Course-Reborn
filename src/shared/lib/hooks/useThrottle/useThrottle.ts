import { useCallback, useRef } from 'react';

export const useThrottle = (cb: (...args: any[]) => void, delay: number) => {
    const currentTimeRef = useRef(Date.now());

    return useCallback((...args: any[]) => {
        if (Date.now() - currentTimeRef.current >= delay) {
            cb(...args);
            currentTimeRef.current = Date.now();
        }
    }, [cb, delay]);
};
