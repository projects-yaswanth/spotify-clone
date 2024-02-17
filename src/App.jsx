//@ts-nocheck
import { Buffer } from 'buffer';
import { Suspense, useEffect, useState } from 'react';
import { useNavigation, BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import UserAccess from './authentication/UserAccess';
import CategoryExplorePage from './pages/CategoryExplorePage';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import SearchPage from './pages/SearchPage';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import Spinner from './ui/Spinner';

function App() {
  const CLIENT_ID = 'd4dd0a86583a421f801a78ffaf9690b9';
  const CLIENT_SECRET = '9926a0bd368844eba1ea43f34245cb47';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading((state) => !state)
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
      <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <UserAccess>
                <AppLayout />
              </UserAccess>
            }>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="search/:q" element={<CategoryExplorePage />} />
            <Route path="search/:q/:type" element={<CategoryExplorePage />} />
            <Route path="search/category/:q" element={<CategoryExplorePage />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
    </>
  );
}

export default App;
