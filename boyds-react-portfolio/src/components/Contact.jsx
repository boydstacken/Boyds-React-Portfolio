import React from 'react';

const styles = {
    contactFormContainer: {
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px'
      },
      inputField: {
        width: '100%',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        marginTop: '6px',
        marginBottom: '16px',
        resize: 'vertical'
      },
      submitButton: {
        backgroundColor: '#3d3935',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      },
      submitButtonHover: {
        backgroundColor: 'steelblue'
      }
    };

function ContactForm() {
  return (
    <div className="contact-form-container">
      <form action="action_page.php">

        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="First Name" />

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Last Name" />
     
        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Input Text Here" style={{ height: '200px' }}></textarea>

        <input type="submit" value="Submit" />

      </form>
    </div>
  );
}

export default ContactForm;

