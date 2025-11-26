'use client';

import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '@/firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    
    
    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Profile
    const updateUser = (userInfo, updatedData) => {
        return updateProfile(userInfo, updatedData);
    };

    // Google SignIn
    const signWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Sign In
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log Out
    const logOut = () => {
        return signOut(auth);
    };





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = { 
        user,
        createUser,
        updateUser,
        signWithGoogle,
        signInUser,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;























// import React from 'react';
// import { AuthContext } from './AuthContext';
// import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {

//     const [user, setUser] = useState(null);


//     // Create User
//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     // Google SignIn
//     const signWithGoogle = () => {
//         return signInWithPopup(auth, googleProvider);
//     };



//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//         });

//         return () => {
//             unsubscribe();
//         }
//     }, []);

//     const authInfo = {
//         user,
//         createUser,
//         signWithGoogle,
//     }
    
//     return (
//         <AuthContext value={authInfo}>{ children }</AuthContext>
//     );
// };

// export default AuthProvider;