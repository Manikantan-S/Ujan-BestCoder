// MainComponent.js
import React, { useState } from 'react';
import Navbar from './Navbar'; // Import Navbar component
import BodyComponent from './BodyComponent';

const MainComponent = () => {
    const [selectedStyle, setSelectedStyle] = useState('default'); // State to store selected style

    // Function to handle style change
    const handleStyleChange = (style) => {
        setSelectedStyle(style);
    };

    return (
        <div id='main' className="flex flex-col min-h-screen">
            <Navbar onStyleChange={handleStyleChange} /> {/* Pass callback function to Navbar */}
            <BodyComponent selectedStyle={selectedStyle} /> {/* Pass selected style to BodyComponent */}
            <div id="footer" className="pt-4 bg-gray-200">
                <div className='bg-white border rounded-t-3xl text-center text-gray-500'>
                    <p>A simple markdown previewer.</p>
                    <p>Code by &nbsp;
                        <a href='https://github.com/forhadakhan/' target='_blank' rel="noopener noreferrer">@Ujan</a>  &nbsp;
                        [<a  href='https://github.com/forhadakhan/markdown-previewer' target='_blank' rel="noopener noreferrer">repo</a>] 
                    </p>
                    <p><a href='https://www.markdownguide.org/cheat-sheet#overview' target='_blank' rel="noopener noreferrer">Markdown Cheatsheet</a></p>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
