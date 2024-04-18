import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Link from 'next/link';
//import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome'
//import { faInfoCircle, faUtensils, faStore, faBus } from '@fortawesome/free-brands-svg-icons'


// Sidebar component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className='center'>
        {/* Use Link component for Next.js routing */}
        <li>
          <Link href="/" className="sidebar-link circle"><span className="emoji">&#127968;</span></Link>
        </li>
        <li>
          <Link href="/about" className="sidebar-link circle"><span className="emoji">&#x2754;</span></Link>
        </li>
        <li>
          <Link href="/dining" className="sidebar-link circle"><span className="emoji">&#x1F355;</span></Link>
        </li>
        <li>
          <Link href="/stores" className="sidebar-link circle"><span className="emoji">&#x1F6D2;</span></Link>
        </li>
        <li>
          <Link href="/transit" className="sidebar-link circle"><span className="emoji">&#x1F68C;</span></Link>
        </li>
      </ul>
    </div>
  );
};

// Render the sidebar component
//ReactDOM.render(<Sidebar />, document.getElementById('root'));
export default Sidebar;