import React from 'react';
import EducationItem from './EducationItem/EducationItem';
import Timeline from '@mui/lab/Timeline';
import { Typography } from '@mui/material';

const Education = (props)=>{
    return(<>
        <Typography variant="h3">Education</Typography>
        <Timeline>
            <EducationItem date="September 2008 - July 2012">
                <Typography variant="body">Univsersity for the Creative Arts, Farnham</Typography>
                <Typography variant="body">Film Production BA (Hons)</Typography>
            </EducationItem>
            <EducationItem date="September 2006 - July 2008">
                <Typography variant="body">Itchen College, Southampton — A Level</Typography>
                <Typography variant="body">A2 Level - Maths, Electronics, Media Studies</Typography>
                <Typography variant="body">AS Level - Film Studies, Physics</Typography>
            </EducationItem>
        </Timeline>
    </>)
}

export default Education;