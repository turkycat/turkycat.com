import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import AboutElement from './About'
import HomeElement from './Home'

function NavHome() {
  ReactDOM.render(<HomeElement />, document.getElementById("content-root"));
}

function NavAbout() {
  ReactDOM.render(<AboutElement />, document.getElementById("content-root"));
}

export default function App() {
  //const [count, setCount] = useState(0);
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue darken-3">
          <a href="#" className="brand-logo" style={{ paddingLeft: '10' }}>turkycat.com</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li><a onClick={() => setCount(count + 1)}>{count}</a></li> */}
            <li><a onClick={NavHome}>home</a></li>
            <li><a onClick={NavAbout}>about</a></li>
            <li><a href="collapsible.html">conway</a></li>
          </ul>
        </div>
      </nav>
      <div id='content-root'/>
    </div>
  )
}