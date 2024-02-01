//@ts-nocheck
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import SearchPage from './pages/SearchPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
