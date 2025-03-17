import * as React from "react";

interface SwitchProps {
    id: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ id, checked = false, onChange }) => {
    const [isChecked, setIsChecked] = React.useState(checked);

    const toggleSwitch = () => {
        setIsChecked(!isChecked);
        if (onChange) onChange(!isChecked);
    };

    return (
        <button
            id={id}
            onClick={toggleSwitch}
            className={`relative w-12 h-6 rounded-full transition-all ${isChecked ? "bg-blue-600" : "bg-gray-300"
                }`}
        >
            <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${isChecked ? "translate-x-6" : ""
                    }`}
            />
        </button>
    );
};
