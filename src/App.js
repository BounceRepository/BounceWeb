import './App.css';
import { Suspense } from 'react';
import RouterPage from './routerPage';
import { BrowserRouter } from 'react-router-dom'
import AppLoading from './utils/appLoading';
import { ThemeProvider } from '@mui/styles';
import { theme } from './theme/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<AppLoading />}>
        <ThemeProvider theme={theme}>
          <RouterPage />
          </ThemeProvider>
        </Suspense>
      </BrowserRouter>

    </div>
  );
}

export default App;
