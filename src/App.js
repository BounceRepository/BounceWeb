import './App.css';
import { Suspense } from 'react';
import RouterPage from './routerPage';
import { BrowserRouter } from 'react-router-dom'
import AppLoading from './utils/appLoading';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<AppLoading />}>
          <RouterPage />
        </Suspense>
      </BrowserRouter>

    </div>
  );
}

export default App;
