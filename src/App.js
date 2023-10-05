import CV from './CV/CV';
import theme from './theme/theme';
import {Container, CssBaseline, ThemeProvider} from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container className="App">
        <CV/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
