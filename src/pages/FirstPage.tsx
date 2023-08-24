import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FirstPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    if (name.trim() === '' || phoneNumber.trim() === '' || email.trim() === '') {
      setErrorMessage('Please fill in all the details');
      return;
    }

    localStorage.setItem('userDetails', JSON.stringify({ name, phoneNumber, email }));
    navigate('/second');
  };

  return (
    <div>
      <h2>First Page</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default FirstPage;
