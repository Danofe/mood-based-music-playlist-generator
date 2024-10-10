import React from 'react'
import { useAuth } from './authcontext/auth';
import { logout } from './authcontext/authFunctions';

function Signout() {
  const logoutUser = logout();
  

  return (
    <div>
      <button onClick={logoutUser} className='text-2xl'>Signout</button>
    </div>
  )
}

export default Signout
