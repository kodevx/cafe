import React from 'react';
import './styles.css';

const Nav = (props) => {
    return ( 
      <div className="nav">
        <div className="nav-title-2">{props.title}</div>
        <div className="nav-title-1">cafe <span className="text2"> Corner.</span></div>
      </div>
    );
}
 
export default Nav;

