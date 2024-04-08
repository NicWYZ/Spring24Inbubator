import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// Sidebar component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

// Render the sidebar component
//ReactDOM.render(<Sidebar />, document.getElementById('root'));
export default Sidebar;