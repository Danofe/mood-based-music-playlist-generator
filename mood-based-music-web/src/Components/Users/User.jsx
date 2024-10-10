import { useState } from "react"
import React from 'react'
import { useAuth } from "./authcontext/auth";
import { logout } from "./authcontext/authFunctions";
import Signin from "./Signin";


function User() {
    const [active, setActive] = useState(false);

    const { user } = useAuth();

  return (
    <div>
        
        <button onClick={() => setActive(!active)} className='text-2xl'>Sign in</button>

        <div className={`absolute top-16 w-full right-0 p-4 ${active ? 'block' : 'hidden'}`}>
          <Signin />
        </div>

      
    </div>

  )
}

export default User
