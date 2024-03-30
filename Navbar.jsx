import React, { useState } from 'react';

const Navbar = ({ onStyleChange }) => {
  const [selectedStyle, setSelectedStyle] = useState('default');
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [selectedTextSize, setSelectedTextSize] = useState(16);

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
    onStyleChange(style);
  };

  const handleFontChange = (font) => {
    setSelectedFont(font);
    onStyleChange(`font: ${font}`);
  };

  const handleTextSizeChange = (size) => {
    setSelectedTextSize(size);
    onStyleChange(`font-size: ${size}px`);
  };

  const handleFontSizeDropdown = (e) => {
    const size = parseInt(e.target.value, 10);
    handleTextSizeChange(size);
  };

  const fontSizeOptions = [];
  for (let i = 10; i <= 36; i += 2) {
    fontSizeOptions.push(<option key={i} value={i}>{i}px</option>);
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="text-white font-bold">Markdown Previewer</div>
      <div className="flex items-center space-x-2 mt-2">
        <div className="flex space-x-2">
          <div className={`text-white ${selectedStyle === 'default' ? 'bg-gray-900' : 'bg-gray-800'} rounded px-3 py-1 cursor-pointer`} onClick={() => handleStyleChange('default')}>
            Default
          </div>
          <div className={`text-white ${selectedStyle === 'dark' ? 'bg-gray-900' : 'bg-gray-800'} rounded px-3 py-1 cursor-pointer`} onClick={() => handleStyleChange('dark')}>
            Dark
          </div>
          <div className={`text-white ${selectedStyle === 'light' ? 'bg-gray-900' : 'bg-gray-800'} rounded px-3 py-1 cursor-pointer`} onClick={() => handleStyleChange('light')}>
            Light
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-white bg-gray-700 px-3 py-1 rounded" onClick={() => handleStyleChange('bold')}>
            Bold
          </button>
          <button className="text-white bg-gray-700 px-3 py-1 rounded" onClick={() => handleStyleChange('italic')}>
            Italic
          </button>
          <select className="bg-gray-700 text-white rounded px-3 py-1" value={selectedTextSize} onChange={handleFontSizeDropdown}>
            {fontSizeOptions}
          </select>
          <select className="bg-gray-700 text-white rounded px-3 py-1 ml-2" value={selectedFont} onChange={(e) => handleFontChange(e.target.value)}>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
