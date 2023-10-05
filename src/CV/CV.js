import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience.js';
import Education from './Education/Education';
import {Box, Typography} from "@mui/material";

const CV = (props)=>{
    return(
        <Box>
            <Typography variant="h1">James Hyde</Typography>
            <Typography variant="h2">Web Developer / Software Engineer</Typography>
            <Typography variant="body">This site is a work in progress. Check back later for updates!</Typography>
            <AboutMe/>
            <Skills/>
            <Experience/>
            <Education/>
        </Box>
    )
}

export default CV;