import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience.js';
import Education from './Education/Education';
import SelectedProjects from './SelectedProjects/SelectedProject';
import ContactMe from './ContactMe/ContactMe';
import {Box, Typography} from "@mui/material";

const CV = (props)=>{
    return(
        <Box>
            <Typography variant="body">This site is a work in progress. Check back later for updates!</Typography>
            <AboutMe/>
            <Skills/>
            <Experience/>
            <Education/>
            <SelectedProjects/>
            <ContactMe/>
        </Box>
    )
}

export default CV;