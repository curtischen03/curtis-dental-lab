// src/PasswordPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PasswordPage() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'yourpassword' with the actual password you want to check
    if (password === 'yourpassword') {
      navigate('/price-catalog');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div id='productCSS' style = {{width:'80vw',marginLeft:'auto',marginRight:'auto',marginTop:'10px',}} >
        <div >        
            <h2>Enter Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    </div>
  );
}

export default PasswordPage;
