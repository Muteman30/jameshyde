import React from 'react';
import {Typography, Box} from '@mui/material';
import CVSection from '../../components/CVSection/CVSection';

const SelectedProjects = (props)=>{
    return(<CVSection>
        <Typography variant="h3">Selected Projects</Typography>
        <Box>
            <Typography variant="h4">OS Commercial Customers - Ordnance Survey</Typography>
            <Typography variant="body">The main aim of this project was to bring existing products within OS to a new customer base which wanted to be monetised differently than the existing customers. In the delivery of this work, it meant that I worked closely with UX and UI teams to understand a user's journey with the new process and evaluate any hurdles the customers may face. I then was able to take those designs and insights to create new components for the OS Data Hub matching designs and aligning them to the accessibility guidelines. Once delivered we were able to extend the services offered by the data hub to new customers, reduce workloads on manual processes, and decommission older systems.</Typography>
        </Box>
        <Box>
            <Typography variant="h4">Digtial Asset Hub - Ordnance Survey</Typography>
            <Typography variant="body">At OS a lot of their existing projects were built from scratch and deployed to Azure. When a new customer would approach OS a new application would be built, but this took extra work every time. We wanted to build a simple containerised web app that included a map with layer control and could be configured to plug into any PostGIS database and most identity providers. I was responsible for containerising the node application and any documentation work so that teams would be able to configure this for future customers. I also gave a presentation at OS’s Technology conference days about the work we were doing and how containerisation would be able to help the business. </Typography>
        </Box>
        <Box>
            <Typography variant="h4">Customer Privacy Phone Agent Tool - Quilter</Typography>
            <Typography variant="body">Before the solution I created for the contact teams they were using a static 'Flipper' to conduct the identifying of customers. This leads to predictable behavior in the agents and a protection risk in the business. The solution I built allowed admins to create and manage questions that could be asked for every account status, product, and caller role, randomly selecting questions to improve unpredictability, and giving a code to allow for the auditing of data protection. </Typography>
        </Box>
    </CVSection>)
}

export default SelectedProjects;