import React from 'react';

const styles = {
        footerSection: {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#3d3935',
        },
        footerContent: {
          borderRight: 'solid',
          marginTop: '10px',
        },
        footerList: {
          display: 'flex',
          justifyContent: 'right',
          marginRight: 'auto',
          marginLeft: '0px',
          textAlign: 'left',
          alignItems: 'center',
          listStyle: 'none',
          padding: '0px',
          height: 'auto',
          width: 'fit-content',
        },
        footerLink: {
          display: 'inline-block',
          padding: '20px',
          backgroundColor: 'white',
          color: '#3d3935',
          textDecoration: 'none',
        },
      };

const Footer = () => {
    <section class="footer-section" id="contact">
    <div class="flexbox-container footer-section-styling">
        <h2>Contact</h2>
    </div>
         <ul class="footer-section ul" id="contact">
            <li><a href="https://github.com/boydstacken/02-Challenge">Github</a></li>
            <li><a href="https://www.linkedin.com/in/boyd-stacken-809197a7">LinkedIn</a></li>
            <li><a href="tel:+17152453456">(715)245-3456</a></li>
            <li><a href="mailto:boydstacken@icloud.com">boydstacken@icloud.com</a></li>
        </ul>
</section>
}

export default Footer;