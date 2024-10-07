import React, {useState} from 'react'
import User from './Users/User';


function Navbar() {

    let navlinks = [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/about'},
        {name: 'Contact', link: '/contact'},
        {name: 'Test', link: '/test'},
    ]

    const [active, setActive] = useState(false);

  return (
    <div>
        <div className='w-full fixed top-0 left-0 shadow-md'>
            <div className='flex justify-between items-center bg-white p-4'>
                <div className='text-xl font-bold'>Mood Based Music</div>
                <div className='hidden md:flex'>
               
                    {navlinks.map((link, index) => (
                        <a href={link.link} key={index} className='mx-2'>{link.name}</a>
                    ))}
                     <User />
                </div>
                <div className='md:hidden'>
                    <button onClick={() => setActive(!active)} className='text-2xl'>&#9776;</button>
                </div>
            </div>
            <div className={`md:hidden ${active ? 'block' : 'hidden'}`}>
                {navlinks.map((link, index) => (
                    <a href={link.link} key={index} className='block p-4 border-t'>{link.name}</a>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
