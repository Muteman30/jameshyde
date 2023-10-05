import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography:{
        fontFamily:[
            'Montserrat',
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif'
        ].join(',')
    },
    components:{
        MuiTypography: {
            defaultProps: {
                variantMapping:{
                    h1:'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                    h6: 'h6',
                    subtitle:'h3',
                    body: 'p',
                }
            }
        }
    }
})

export default theme;
