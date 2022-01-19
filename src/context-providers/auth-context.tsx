import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { 
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';


export interface AuthContextModel {
    // user if not logged in be null FIX ANY TYPE HOLY SHIT
    user: any | null;
    signInWithGoogle: () => void;
    register: (registerEmail: string, registerPassword: string) => void;
    login: (loginEmail: string, loginPassword: string) => void;
    logout: () => void;
};

const defaultValue: AuthContextModel = {
    user: null,
    signInWithGoogle: () => {},
    register: () => {},
    login: () => {},
    logout: () => {},
};

export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
    // sets initial User state to null BUT HOLY SHIT FIX ANY TYPE
    const [user, setUser] = useState<any | null>(null);
    
    // USEEFFECT HERE?! THEN REDIRECT?
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('currentUser', currentUser);
        })
    }, [])

    // to sign in with Google via a redirect
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        try {
            signInWithRedirect(auth, provider).then((results) => {
                console.log('SignInWithRedirectResults:', results);

            })
        } catch (error) {
            console.log('error:', error)
        }
    }

    // to login or sign-up via email
    const register = async (registerEmail: string, registerPassword: string) => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (loginEmail: string, loginPassword: string) => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };
    
    const logout = async () => {
        await signOut(auth);

    };


    return (
        <AuthContext.Provider value={{user, signInWithGoogle, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}