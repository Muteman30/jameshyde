import React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector'; 
import TimelineContent from '@mui/lab/TimelineContent';
import { TimelineOppositeContent } from '@mui/lab';


const EducationItem = (props)=>{
    return(
        <TimelineItem>
            <TimelineOppositeContent>{props.date}</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            
            <TimelineContent>{props.children}</TimelineContent>
        </TimelineItem>
    )
}

export default EducationItem;