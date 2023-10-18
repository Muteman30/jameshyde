import CV from './CV/CV';
import theme from './theme/theme';
import Header from './components/Header/Header'
import {Container, CssBaseline, ThemeProvider} from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container className="App">
        <Header/>
        <CV/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
