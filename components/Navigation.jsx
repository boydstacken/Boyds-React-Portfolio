import React from 'react'
import {} from 'react-router-dom'
 
function Navbar() {
    return (
    //   <div style={styles.card}>
    //     <div style={styles.heading}>Home</div>
        <nav>
                {/* <!--Navbar list items and linked to their section of page. Resume links to PDF doc--> */}
                        <ul>
                            <li><a href="/Users/boyd/Documents/Bootcamp/codingbootcamp/class-repo/UofW-VIRT-FSF-PT-02-2023-U-LOLC/02-Advanced-CSS/02-Challenge/Assets/Boyd Stacken Career Resume.pdf">Resume</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>
                    </nav>
      </div>
    )
  }
  
  export default Navbar;
  