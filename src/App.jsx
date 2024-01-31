//@ts-nocheck
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/" />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
