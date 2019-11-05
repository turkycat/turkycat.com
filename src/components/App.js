import React, { useState } from 'react';

// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>welcome to turkycat.com</h1>
//       <br />
//       <br />
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//     </div>
//   );
// }

export default function App() {
  //const [count, setCount] = useState(0);
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue darken-3">
          <a href="#" className="brand-logo" style={{ paddingLeft: '10' }}>turkycat.com</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li><a onClick={() => setCount(count + 1)}>{count}</a></li> */}
            <li><a onClick={() => setCount(count + 1)}>home</a></li>
            <li><a href="badges.html">about</a></li>
            <li><a href="collapsible.html">conway</a></li>
          </ul>
        </div>
      </nav>
      <div id='content-mount'>

      </div>
    </div>
  )
}