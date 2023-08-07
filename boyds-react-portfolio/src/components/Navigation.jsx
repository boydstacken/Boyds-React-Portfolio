import React from 'react'
import { Link } from 'react-router-dom';

const styles = {
header: {
  color: 'white',
  marginLeft: '0px',
  padding: '20px',
  backgroundColor: '#3d3935',
  display: 'inline-block',
  fontSize: '32px'
}
};

function Navbar() {
    return (
      <div style={styles.card}>
        <div style={styles.header}>Boyd Stacken </div>
        <img src="src/assets/profile pic.jpeg" alt="picture of Boyd Stacken" className="profile-picture"></img>
        <nav>
                {/* <!--Navbar list items and linked to their section of page. Resume links to PDF doc--> */}
                        <ul>
                            <li><a href="/resume">Resume</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/project">Portfolio</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/">Home</a></li>

                        </ul>
                    </nav>  
       </div>
    )
  }
  
  export default Navbar;
  