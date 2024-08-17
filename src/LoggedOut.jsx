import React from 'react';

function LoggedOut({ onLogin }) {
  return (
    <div className='form'>
        <h1>Login Form</h1>
      <form>
        <input type="email" name="email" id="email" placeholder='Enter your email'/> <br /><br />
        <input type="password" name="password" id="password" placeholder='Enter password'/><br /><br />
      </form>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default LoggedOut;