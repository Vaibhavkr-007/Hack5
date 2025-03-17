import * as React from "react";

interface ProgressProps {
    value: number;
    className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, className }) => {
    return (
        <div className={`relative w-full h-2 bg-gray-200 rounded ${className}`}>
            <div
                className="absolute left-0 h-2 bg-blue-600 rounded"
                style={{ width: `${value}%` }}
            />
        </div>
    );
};
