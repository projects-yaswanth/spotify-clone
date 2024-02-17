import { useDocumentTitle } from '@uidotdev/usehooks';
import { BsFacebook } from 'react-icons/bs';
import { GrGoogle } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { setUser } from '../Context/UserContext';
import Button from '../ui/Button';
import { SignWithGoogleAccount } from './../services/firebase';

const Header = styled.div`
  height: 7rem;
  width: 100%;
  background-color: #121212;
  display: flex;
  align-items: center;
  padding: 4rem;
  gap: 1rem;

  & h1 {
    font-family: var(--font-roboto-100);
    font-weight: bolder;
  }
`;

const Image = styled.img`
  height: 3rem;
  width: 3rem;
`;

const LoginDiv = styled.div`
  height: 70rem;
  width: 100%;
  background-color: #202020;
  display: flex;
  padding: 3rem 0;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

const Card = styled.div`
  height: 60rem;
  width: 60rem;
  border-radius: 10px;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 5rem 1rem;

  & h1 {
    font-size: 3rem;
    font-family: 'Figtree', sans-serif;
    font-weight: 900;
  }
`;

const Login = () => {
  useDocumentTitle('Login - Spotify');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSignInWithGoogle(e) {
    const obj = await SignWithGoogleAccount();
    dispatch(setUser(obj));
    if (obj.accessToken !== '') {
      navigate('/home');
    }
  }

  return (
    <>
      <Header>
        <Image src="/spotify.png" alt="" />
        <h1>Spotify</h1>
      </Header>
      <LoginDiv>
        <Card>
          <h1>Log in to Spotify</h1>
          <Button auth="auth" onClick={handleSignInWithGoogle}>
            <GrGoogle style={{ position: 'absolute', left: '1.5rem', fontSize: '1.7rem' }} />
            <span>Continue with Google</span>
          </Button>
          <Button auth="auth">
            <BsFacebook style={{ position: 'absolute', left: '1.5rem', fontSize: '1.7rem' }} />
            <span>Continue with Facebook</span>
          </Button>
        </Card>
      </LoginDiv>
    </>
  );
};

export default Login;
