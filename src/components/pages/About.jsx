import React from 'react'
import Boyd from '../../assets/Boyd.jpg'

const About = () => {
    return (
        <section className="paragraph=section" id="aboutString">
        <img src = {Boyd} alt="picture of me"  style={{ height: '200px', width: 'auto' }}
/> 
        <h2>About Me</h2>
        <p>As an asipring Web Developer, I'm driven to understand the needs of users online and create effective web applications to deliver a positive experience. With a background in Marketing, Sales, Communications, & Graphic Design, I'm aiming to connect the consumer experience to the backend of structuring and designing websites. Learning the fundamentals of web development while using my current background will propel me to craft the consumer journey and provide functionality for client websites. </p>
        </section>
    )
}
export default About;