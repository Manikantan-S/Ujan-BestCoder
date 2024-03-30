// BodyComponent.js
import React, { useState } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';

const BodyComponent = ({ selectedStyle }) => {
    const [markdown, setMarkdown] = useState('');

    const handleEditorChange = (event) => {
        setMarkdown(event.target.value);
    };

    let backgroundColorClass = 'bg-gray-200'; // Default background color

    if (selectedStyle === 'dark') {
        backgroundColorClass = 'bg-black'; // Change background color to black for dark mode
    } else if (selectedStyle === 'light') {
        backgroundColorClass = 'bg-white'; // Change background color to white for light mode
    }

    return (
        <div className={`${backgroundColorClass} flex flex-col md:flex-row border rounded-t-3xl md:p-4 h-screen`}>
            <div className="md:w-full m-2">
                <Editor onChange={handleEditorChange} value={markdown} />
            </div>
            <div className="md:w-full m-2 overflow-auto">
                <Previewer markdown={markdown} />
            </div>
        </div>
    );
};

export default BodyComponent;
