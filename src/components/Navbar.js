import React from 'react';
import '../styles/navbar.css';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h2 style={{  border: '1px solid #fff', padding:10 }}>PantanalDex</h2>
      </div>
      {/* <div className="navbar__info">
          <MenuIcon/>
      </div> */}
    </div>
  );
}

export default Navbar;
