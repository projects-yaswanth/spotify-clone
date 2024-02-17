import { useSelector } from 'react-redux';

const UserAccess = ({ children }) => {
  const access = useSelector((state) => state.user.isVerified);
  console.log(access);

  return children;
};
export default UserAccess;
