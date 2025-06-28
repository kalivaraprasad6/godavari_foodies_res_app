import React from 'react';
import axios from 'axios';
export default function About() {
  const [users, setUsers] = React.useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5001/users');
      setUsers(response.data);
      console.log('Users:', response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  React.useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '40px' }}>About</h1>
    </div>
  );
}
