import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import firebase from '../firebaseConfig';

export interface AuthContextModel {
    // user must be recognized by FB or, if not logged in be null
    user: firebase.User | null;
};

const defaultValue: AuthContextModel = {
    user: null
};

export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
    // sets initial User state to null
    const [user, setUser] = useState<firebase.User | null>(null);

    // useEffect to ensure only runs once
    useEffect(() => {

        return firebase.
    })


}