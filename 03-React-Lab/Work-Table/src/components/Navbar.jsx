import React from 'react'
import { Link } from 'react-router-dom';
function Navbar(){
    return(
<header>
      <h1>The Synthpop Hall of Fame</h1>
      <nav>
        <ul>
          {/* Leaving these as traditional anchors for now. Clicking them will reload the app. */}
           {/* Using Link instead of anchor tags stops browser reloads */}
          <li><Link to="/">The Revolution</Link></li>
          <li><Link to="/details">The TR-808</Link></li>
          <li><Link to="/charts">The Charts</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;