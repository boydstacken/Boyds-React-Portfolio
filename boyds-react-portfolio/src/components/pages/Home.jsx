import React from 'react';
import backgroundImage from '/Users/boyd/Documents/Bootcamp/codingbootcamp/challenges/Boyds-React-Portfolio/boyds-react-portfolio/src/assets/Michigan-Banner-3.png'
import About from './About';
const styles = {
    outdoorImage:{
        width: '100%',
        height: '500px',
        paddingRight: '0px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    heroText: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        verticalAlign: 'middle',
        alignContent: 'center',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        paddingLeft: '45%',
        textShadow: '1px 0 10px #3d3935'
    }

};
const Home=() => {
  return (
<div>
  <div className = "outdoor-image" style={styles.outdoorImage}>
    <div style={styles.heroText}><h1>My Portfolio</h1><h3>Aspiring Web Developer</h3></div>
  </div>
  <About/>
  </div>
  );
}

export default Home;