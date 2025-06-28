import React from 'react';
import '../styles/login.css';
import axios from 'axios';
export default function Login() {
  const userData = [
    { labelName: 'Email', InputType: 'email', name: 'email' },
    { labelName: 'Password', InputType: 'password', name: 'password' },
  ];
  const [loginDetails, setLoginDetails] = React.useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = React.useState('');
  const [isSuccess, setIsSuccess] = React.useState(null);

  const [existingUsers, setExistingUsers] = React.useState([]);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:5001/users');
    setExistingUsers(response.data);
    console.log('Users:', response.data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, [loginDetails]);

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginDetails(prev => ({ ...prev, [name]: value }));
  };

  const submitHandler = async e => {
    e.preventDefault();
  };
  return (
    <div>
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
                  value={loginDetails[data.name]}
                  onChange={handleChange}
                  name={data.name}
                  autoComplete={data.name} // Add autocomplete attribute
                />
              </div>
            );
          })}
          <button
            className='login-button'
            type='submit'>
            login
          </button>
        </form>
        <h3
          className={isSuccess === null ? '' : isSuccess ? 'success' : 'error'}>
          {message}
        </h3>
        {isSuccess && (
          <p className='loader-text'>Redirecting to dashboard...</p>
        )}
      </div>
    </div>
  );
}
