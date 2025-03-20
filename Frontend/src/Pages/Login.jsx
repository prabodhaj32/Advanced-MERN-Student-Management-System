import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLoginSuccess = (response) => {
    const token = response.credential;
    dispatch(setUser({ user: { token } }));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl">Login</h2>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.log('Login Failed')} />
    </div>
  );
};

export default Login;
