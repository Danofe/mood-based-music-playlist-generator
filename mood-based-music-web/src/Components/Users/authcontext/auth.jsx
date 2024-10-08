import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser(...user);
            setUser(true);
        } else {
            setCurrentUser(null);
            setUser(false);
        }
        setLoading(false);

    }
  
    const value = {
        currentUser,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
 