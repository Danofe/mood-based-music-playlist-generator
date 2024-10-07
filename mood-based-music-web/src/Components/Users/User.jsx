import { useState } from "react"
import React from 'react'
import { useAuth } from "./authcontext/auth";


function User() {
    const [active, setActive] = useState(false);

    const {currentUser} = useAuth();

  return (
    <div>
        <button onClick={() => setActive(!active)} className='text-2xl'>User</button>
    </div>
  )
}

export default User
