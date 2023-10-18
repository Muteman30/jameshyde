import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette:{
        background:{
            light: "#FFFFFF",
            main: "#F7F3E3",
            dark: "#EDE4BF",
            contrastText: "#0D1821"
        },
        primary: {
            light: "#F07F9F",
            main: "#E83F6F",
            dark: "#EA4876",
            textContrast: "#0D1821"
        },
        /*secondary: {
            light: "",
            main: "",
            dark: "",
            textContrast: ""
        },
        error: {
            light: "",
            main: "",
            dark: "",
            textContrast: ""
        },
        warning: {
            light: "",
            main: "",
            dark: "",
            textContrast: ""
        },
        success: {
            light: "",
            main: "",
            dark: "",
            textContrast: ""
        },*/
        info: {
            light: "#172B3A",
            main: "#0D1821",
            dark: "#0C151D",
            textContrast: "#FFF"
        }
    },
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
                    appTitle: "h1",
                    appSubtitle: "span",
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
