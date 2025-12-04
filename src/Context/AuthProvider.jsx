import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';




const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   
    

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser);
    //         // console.log(currentUser)
    //         setLoading(false);
    //     })

    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])

    const authInfo = {
        
        user,
        loading,
        setUser,
        setLoading
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;