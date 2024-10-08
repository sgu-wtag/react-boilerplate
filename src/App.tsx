import { Route, Routes } from 'react-router-dom';
import { Home, Settings } from './pages';
import { home, settings } from './routes/paths';

function App() {
  return (
    <Routes>
      <Route path={home} element={<Home />} />
      <Route path={settings} element={<Settings />} />
    </Routes>
  );
}

export default App;
