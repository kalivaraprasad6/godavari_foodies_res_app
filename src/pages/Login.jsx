import React from 'react';
import { useNavigate } from 'react-router-dom';

import users from '../dummyData/users';
import '../styles/login.css';
export default function Login() {
  const userData = [
    { labelName: 'Email', InputType: 'email', name: 'email' },
    { labelName: 'Password', InputType: 'password', name: 'password' },
  ];
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = React.useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = React.useState('');
  const [isSuccess, setIsSuccess] = React.useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const submitHandler = e => {
    e.preventDefault();
    const userFound = users.find(
      user =>
        user.email === userDetails.email &&
        user.password === userDetails.password
    );
    if (userFound) {
      setIsSuccess(true);
      setMessage('Login successful');

      // Simulate loading delay before navigating
      setTimeout(() => {
        // Navigate to the dashboard after a delay
        navigate('/login/dashboard');
      }, 3000);
    } else {
      setIsSuccess(false);
      setMessage('Invalid email or password');
    }
  };
  return (
    <div>
      <form
        className='login-form'
        onSubmit={submitHandler}>
        {userData.map((data, index) => {
          return (
            <div
              className='login-container'
              key={index}>
              <label className='login-lable'>{data.labelName}</label>
              <input
                className='login-input'
                required
                type={data.InputType}
                value={data.value}
                onChange={handleChange}
                name={data.name}
              />
            </div>
          );
        })}
        <button
          className='login-button'
          type='submit'>
          Login
        </button>
      </form>
      <h3 className={isSuccess === null ? '' : isSuccess ? 'success' : 'error'}>
        {message}
      </h3>
      {isSuccess && <p className='loader-text'>Redirecting to dashboard...</p>}
    </div>
  );
}
