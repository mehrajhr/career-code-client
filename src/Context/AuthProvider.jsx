import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

const AuthProvider = ({children}) => {
    const [loading , setLoading] = useState(true);
    const [user , setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const createUser = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }
    const loginUser = (email , password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }
    const logOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth , provider);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        };
    }, [])
    console.log(user);
    const authValue = {
        loading,
        createUser,
        loginUser,
        user,
        logOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext value={authValue}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;