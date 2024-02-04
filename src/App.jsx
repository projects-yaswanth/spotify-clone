//@ts-nocheck
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import SearchPage from './pages/SearchPage';
import PageNotFound from './pages/PageNotFound';
import { Buffer } from 'buffer';
import { useEffect } from 'react';

function App() {
  const CLIENT_ID = 'd4dd0a86583a421f801a78ffaf9690b9';
  const CLIENT_SECRET = '9926a0bd368844eba1ea43f34245cb47';

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: new URLSearchParams({
          grant_type: 'client_credentials'
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
        }
      });
      const jsonData = await data.json();
      localStorage.setItem('token', jsonData.access_token);
    };
    fetchData();
  }, [CLIENT_ID, CLIENT_SECRET]);

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