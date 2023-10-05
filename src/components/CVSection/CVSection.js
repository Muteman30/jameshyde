import React from 'react';
import {Box} from '@mui/material';
import {styled} from '@mui/material/styles'

const StyledSection = styled(Box)(({theme}) => ({
    paddingTop: theme.spacing(3)
}));

const CVSection = (props)=>{
    return(
        <StyledSection>{props.children}</StyledSection>
    )
}

export default CVSection;