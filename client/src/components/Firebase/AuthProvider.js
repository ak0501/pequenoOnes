import firebaseconfig from "./fbCredentials.js";
import React, { useState, useEffect } from 'react';
import fbCredentials from "./fbCredentials.js";
export const AuthContext = React.createContext();


export const AuthProvider = ({ children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        fbCredentials.auth().onAuthStateChanged((User) => {
            setCurrentUser(user);
            setPending(false);
        });
    }, []);

    if (pending) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
    )
};
