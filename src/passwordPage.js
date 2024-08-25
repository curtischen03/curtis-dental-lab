// src/PasswordPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './components/footer.js';
import hash from 'hash.js'; // Importing hash.js correctly


function PasswordPage() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const hashedPassword = hash.sha256().update(password).digest('hex'); // Using the correct method
    if (hashedPassword === 'e3c652f0ba0b4801205814f8b6bc49672c4c74e25b497770bb89b22cdeb4e951') {
      navigate('/price-catalog');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div>
      <div id='productCSS' style = {{width:'80vw',marginLeft:'auto',marginRight:'auto',marginTop:'100px',borderRadius:'15px',marginBottom:'235px'}} >
          <div style = {{padding:'30px'}}>        
              <h2>Enter Password</h2>
              <form onSubmit={handleSubmit}>
                  <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  />
                  <button type="submit" style={{backgroundColor:'lightgrey',borderRadius:'10px',margin:'10px',padding:'3px'}}>Submit</button>
              </form>

          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default PasswordPage;
