import React from 'react';
import {Typography} from '@mui/material'
import CVSection from '../../components/CVSection/CVSection';
const AboutMe = (props)=>{
    return(<CVSection>
        <Typography variant="h3">About Me</Typography>
        <Typography variant="body">Technology has always been a major interest in my life and I love learning about something new. I find immense satisfaction in being part of a wider team to deliver something incredible to customers. I am a natural leader and find myself stepping into help with meetings with my teams.</Typography>
    </CVSection>)
}

export default AboutMe;