import React from 'react';
import {AppBar, Typography} from "@mui/material"

const styles={
    appBar: {
        padding:2
    }
}

const Header = (props)=>{
    return(
        <AppBar sx={styles.appBar}>
            <Typography variant="appTitle">James Hyde</Typography>
            <Typography variant="appSubtitle">Web Developer / Software Engineer</Typography>
        </AppBar>
    )
}
export default Header;