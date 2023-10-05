import React from 'react';
import {Typography, Box} from "@mui/material";

const Experience = (props)=>{
    return(
        <>
            <Typography variant="h3">Experience</Typography>
            <Box>
                <Typography variant="h4">Ordnance Survey - Associate Engineer / Engineer</Typography>
                <Typography variant="caption">February 2021 - Present</Typography>
                <Typography variant="body">Whilst at OS I worked on exciting national infrastructure projects, helped deliver existing products to new customers, and importantly strengthened internal capabilities. The journey I took at OS helped me understand working in a much larger domain and part of a bigger team to accomplish business targets, even when business requirements may change at inopportune times.</Typography>
                <Typography variant="body">I would regularly work with UX teams to help deliver pages and would be included in the early design phases giving valuable feedback about feasibility and usability. This extended to accessibility for other users and I have been able to integrate accessibility testing into our front end work.</Typography>
                <Typography variant="body">I was able to expand my skills with Azure and Azure DevOps spending a lot of time improving and developing continuous delivery pipelines within Azure Devops. I have been a part of several and lead production releases at OS with multiple components at the same time.</Typography>
            </Box>
            <Box>
                <Typography variant="h4">Quilter, Southampton— Web Developer</Typography>
                <Typography variant="caption">April 2016 - February 2021</Typography>
                <Typography variant="body">I started my Web Development journey by joining a team which is responsible for the development and production of web applications for internal customers. Alongside my colleagues, segregating responsibilities to deliver projects and manage task boards within the team and regularly leading agile ceremonies.</Typography>
                <Typography variant="body">Depending on the project I could be trusted to focus on the visual look and layout, the structural markup, or the data manipulation and storage. Due to the available platforms we delivered these applications on Microsoft SharePoint using the built in functionality to enhance it's offerings beyond the standard functionality.</Typography>
            </Box>
        </>
    )
}

export default Experience;