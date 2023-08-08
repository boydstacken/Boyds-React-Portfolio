import React from 'react'
import ResumePDF from "../../assets/Boyd-Stacken-Career-Resume-Updated.pdf"


const Resume = () => {
    return (
        <a href= {ResumePDF} target="_blank" rel="noopener noreferrer">Download Resume</a>
    )
}
export default Resume;