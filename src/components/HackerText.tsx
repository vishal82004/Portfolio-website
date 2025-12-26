import React, { useEffect, useState, useRef } from 'react';

interface HackerTextProps {
    text: string;
    className?: string;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

export const HackerText: React.FC<HackerTextProps> = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<any>(null);

    const startScramble = () => {
        let iteration = 0;
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        startScramble();
        return () => clearInterval(intervalRef.current);
    }, [text]);

    return (
        <span
            className={className}
            onMouseEnter={startScramble}
        >
            {displayText}
        </span>
    );
};
