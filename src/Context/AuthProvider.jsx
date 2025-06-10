import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

const AuthProvider = ({children}) => {
    const [loading , setLoading] = useState(true);
    const [user , setUser] = useState(null);
    const createUser = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }
    const loginUser = (email , password) =>{
        return signInWithEmailAndPassword(auth , email , password);
    }
    const logOutUser = () =>{
        return signOut(auth);
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
        logOutUser
    }
    return (
        <AuthContext value={authValue}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;