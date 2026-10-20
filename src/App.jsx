import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PatternStudio from './pages/PatternStudio';
import Tutorials from './pages/Tutorials';
import YarnLibrary from './pages/YarnLibrary';
import ColorInspiration from './pages/ColorInspiration';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pattern-studio" element={<PatternStudio />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/yarn-library" element={<YarnLibrary />} />
        <Route path="/color-inspiration" element={<ColorInspiration />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
