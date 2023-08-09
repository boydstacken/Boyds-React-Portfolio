import React from "react";
import { Link } from "react-router-dom";
import profile from '../../assets/profile-pic.jpeg';

const styles = {
  header: {
    color: "white",
    marginLeft: "0px",
    padding: "20px",
    backgroundColor: "#3d3935",
    display: "inline-block",
    fontSize: "24px",
  },
};

const Navbar = () => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>Boyd Stacken </div>
      <img src={profile} alt="picture of Boyd Stacken" className="profile-picture"></img>
      <nav>
        <ul className="nav-list">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/project">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
