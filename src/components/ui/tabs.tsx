import * as React from "react";

interface TabsProps {
    defaultValue: string;
    children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, children }) => {
    const [activeTab, setActiveTab] = React.useState(defaultValue);

    return (
        <div>
            {React.Children.map(children, (child) =>
                React.isValidElement(child) ? React.cloneElement(child, { activeTab, setActiveTab }) : child
            )}
        </div>
    );
};

export const TabsList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="flex space-x-2 border-b pb-2">{children}</div>;
};

interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
    activeTab?: string;
    setActiveTab?: (value: string) => void;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, activeTab, setActiveTab }) => {
    const isActive = activeTab === value;
    return (
        <button
            onClick={() => setActiveTab && setActiveTab(value)}
            className={`px-4 py-2 text-sm font-medium ${isActive ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
        >
            {children}
        </button>
    );
};
