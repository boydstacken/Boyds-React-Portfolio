import React from 'react';
import { useState } from "react";

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

const ContactForm = () => {

  const [formValues, setFormValues]= useState({})
  const [email, setEmail] =useState('')
  const [emailError, setEmailError] = useState('')
  
  const handleChange = (e) => {
    e.preventDefault()
    if(e.target.value == ""){
      alert("please enter a value")
    }
    setFormValues({...formValues, [e.target]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.prevent.Default();
    console.log(formValues)
  }

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>

        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="First Name" onBlur={handleChange}/>

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Last Name" onBlur={handleChange}/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" onBlur={handleChange} style={emailError ? {borderColore:'red'} :null}/>
        {emailError && <div className="validation-message">{emailError}</div>}

     
        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Input Text Here" onBlur={handleChange}style={{ height: '200px' }}></textarea>

        <input type="submit" value="Submit" />
        
      </form>

    </div>
  );
}

export default ContactForm;

