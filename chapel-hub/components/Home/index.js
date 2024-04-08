import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// Home component
const Home = () => {
  return (
    <div className="home">
      <ul>
        <li>Chapel Hub</li>
        <li>Welcome to Chapel Hub!</li>
      </ul>
    </div>
  );
};

// Render the sidebar component
//ReactDOM.render(<Sidebar />, document.getElementById('root'));
export default Home;