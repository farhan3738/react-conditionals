import React from 'react';

function LoggedIn({ onLogout }) {
  return (
    <div className='abc'>
      <h2>You are logged in!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default LoggedIn;