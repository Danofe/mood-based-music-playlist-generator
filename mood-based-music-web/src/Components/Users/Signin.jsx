import React from 'react'
import { useState } from "react"
import { Navigate, Link } from "react-router-dom"
import { login, googlelogin, register } from './authcontext/authFunctions'
import { useAuth } from './authcontext/auth'



function Signin() {
    
    const [isAuth, setIsAuth] = useState(false)

    const [register, setRegister] = useState(false)

    const { currentUser } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)



    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(email, password)
        } catch {
            setError('Failed to sign in')
            setIsAuth(false)
        }
        setLoading(false)
    }

    const handleGoogleLogin = async () => {
        try {
            setError('')
            setLoading(true)
            await googlelogin()
        } catch {
            setError('Failed to sign in')
            setIsAuth(false)
        }
        setLoading(false)
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await register(email, password)
        } catch {
            setError('Failed to sign in')
            setIsAuth(false)
        }
        setLoading(false)
    }

  return (
    <div>
        {currentUser && <Navigate to='/' replace={true} />}
    <div className='flex justify-center items-center'>
        <form onSubmit={handleLogin} className={`flex flex-col w-1/2 h-full p-6 text-center rounded-lg bg-white bg-opacity-25 shadow-lg ${!register ? 'block' : 'hidden'}`}>
            <h2 className='text-2xl font-extrabold text-gray-700'>Sign In</h2>
                <p className='mb-3 text-gray-500'>Enter your email and password</p>
                <a onClick={handleGoogleLogin} class="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-100 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300 hover:shadow-xl hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> </svg>
                    Sign in with Google
                </a>
            <div className='flex items-center mb-3'>
                <hr className='h-0 border-b border-solid border-gray-300 grow'></hr>
                <p className='mx-2 text-sm font-medium text-gray-500'>or</p>
                <hr className='h-0 border-b border-solid border-gray-300 grow'></hr>
            </div>
            <label for="email" className='mb-2 text-sm text-start text-gray-100'>Email</label>
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" className='w-full px-3 py-2 mb-5 text-sm text-gray-700 placeholder-gray-300 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline' placeholder='username@provider.com' />
            <label for="password" className='mb-2 text-sm text-start text-gray-100'>Password</label>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" className='w-full px-3 py-2 mb-5 text-sm text-gray-700 placeholder-gray-300 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline' placeholder='Enter your password' />
            <a href='#' className='text-sm font-medium text-gray-500 hover:underline mb-8'>Forgot your password?</a>
            <button disabled={loading} type='submit' className='w-full py-3 text-sm font-bold text-white transition duration-300 rounded-lg bg-gray-900 hover:bg-gray-700 focus:shadow-outline'>Sign In</button>
            <p className='mt-6 text-sm text-gray-100'>Don't have an account? <a onClick={() => setRegister(!register)} className='text-gray-300 hover:underline'>Sign up</a></p>
        </form>

        <form className={`flex flex-col w-1/2 h-full p-6 text-center rounded-lg bg-white bg-opacity-25 shadow-lg ${register ? 'block' : 'hidden'}`}>
            <h2 className='text-2xl font-extrabold text-gray-700'>Sign Up</h2>
                <p className='mb-3 text-gray-500'>Enter your email and password</p>
            <div className='flex items-center mb-3'>
                <hr className='h-0 border-b border-solid border-gray-300 grow'></hr>
                <p className='mx-2 text-sm font-medium text-gray-500'>or</p>
                <hr className='h-0 border-b border-solid border-gray-300 grow'></hr>
            </div>
            <label for="email" className='mb-2 text-sm text-start text-gray-100'>Email</label>
            <input type="email" className='w-full px-3 py-2 mb-5 text-sm text-gray-700 placeholder-gray-300 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline'></input>
            <label for="password" className='mb-2 text-sm text-start text-gray-100'>Password</label>
            <input type="password" className='w-full px-3 py-2 mb-5 text-sm text-gray-700 placeholder-gray-300 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline'></input>
            <label for="password" className='mb-2 text-sm text-start text-gray-100'>Confirm Password</label>
            <input type="password" className='w-full px-3 py-2 mb-5 text-sm text-gray-700 placeholder-gray-300 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline'></input>
            <button onClick={handleRegister} type='submit' className='w-full py-3 text-sm font-bold text-white transition duration-300 rounded-lg bg-gray-900 hover:bg-gray-700 focus:shadow-outline'>Sign Up</button>
            <p className='mt-6 text-sm text-gray-100'>Already have an account? <a onClick={() => setRegister(!register)} className='text-gray-300 hover:underline'>Sign in</a></p>
        </form>

    </div>
    
    </div>
  )
}

export default Signin
