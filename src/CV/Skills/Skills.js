import React from 'react';
import {Typography, List, ListItem} from '@mui/material';
import CVSection from '../../components/CVSection/CVSection';

const componentName = (props)=>{
    return(
        <CVSection>
            <Typography variant="h3">Skills</Typography>
            <List>
                <ListItem>HTML, CSS, JS</ListItem>
                <ListItem>React & React Testing Library</ListItem>
                <ListItem>Material-UI</ListItem>
                <ListItem>Git and NPM</ListItem>
                <ListItem>Java and Spring</ListItem>
                <ListItem>Azure</ListItem>
                <ListItem>Azure Devops</ListItem>
                <ListItem>Agile Development</ListItem>
            </List>
        </CVSection>
    )
}

export default componentName;