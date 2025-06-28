import React from 'react';
import { formFields } from '../data/RegistrationFields.js';
import '../styles/contact.css';
export default function Contact() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    gender: '',
    dob: '',
    country: '',
    termsAccepted: false,
  });
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  return (
    <div className='container-registration'>
      <h1 className='reg-heading'>Enter Details</h1>
      <form>
        {' '}
        {formFields.map(field => {
          const { label, name, type, options } = field;
          return (
            <div
              className='form-group'
              key={name}>
              <label
                className='form-label'
                htmlFor={name}>
                {label}
              </label>
              {type === 'select' ? (
                <select
                  className='form-select'
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={e =>
                    setFormData({ ...formData, [name]: e.target.value })
                  }>
                  <option value=''>Select {label}</option>
                  {options.map(option => (
                    <option
                      key={option}
                      value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className='form-input'
                  type={type}
                  id={name}
                  name={name}
                  value={formData[name]}
                  // onChange={e =>
                  //   setFormData({ ...formData, [name]: e.target.value })
                  // }
                  onChange={handleChange}
                />
              )}
            </div>
          );
        })}{' '}
      </form>
      <button className='form-submit'>submit</button>
    </div>
  );
}
