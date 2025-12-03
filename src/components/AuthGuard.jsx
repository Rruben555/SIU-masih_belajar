import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const isAdmin = localStorage.getItem('admin_token');
  console.log('AuthGuard: Token on load:', isAdmin); // Tambah ini
  if (!isAdmin) {
    console.log('AuthGuard: Redirecting to home'); // Tambah ini
    return <Navigate to="/" />;
  }
  return children;
};

export default AuthGuard;