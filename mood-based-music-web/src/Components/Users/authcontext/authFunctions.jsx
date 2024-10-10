import {auth } from '../Firebase';

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';

export const register = async (email, password) => {
    try {
        return createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        return error;
    }
}

export const login = async (email, password) => {
    try {
        return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        return error;
    }
}

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        return error;
    }
}

export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        return error;
    }
}

export const googlelogin = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result;
    } catch (error) {
        return error;
    }
}