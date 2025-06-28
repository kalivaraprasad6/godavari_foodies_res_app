export const formFields = [
  { label: 'Full Name', name: 'fullName', type: 'text', required: true },
  { label: 'Email', name: 'email', type: 'email', required: true },
  { label: 'Password', name: 'password', type: 'password', required: true },
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    required: true,
  },
  { label: 'Phone', name: 'phone', type: 'tel' },
  { label: 'Date of Birth', name: 'dob', type: 'date' },
  {
    label: 'Gender',
    name: 'gender',
    type: 'select',
    options: ['Male', 'Female', 'Other'],
  },
];
