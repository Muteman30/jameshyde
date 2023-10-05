import React from 'react';
import CVSection from '../../components/CVSection/CVSection';
import {Typography} from '@mui/material';

const ContactMe = (props)=>{
    return(
        <CVSection>
            <Typography variant="h3">Contact Me</Typography>
            <Typography variant="body">Thanks for taking the time to read about me! If you'd like to get in touch about anything you can find me on <a href="https://www.linkedin.com/in/james-hyde-565466141/" target="_blank">LinkedIn</a> or Github</Typography>
        </CVSection>
    )
}

export default ContactMe;