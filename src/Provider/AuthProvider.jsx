/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { createContext, useState } from 'react';
import app from '../Firebase/firebase_config';


export const AuthContext = createContext()

const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})

    const newUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignedUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const GoogleRegister = () =>{
        return signInWithPopup(auth, provider)
    }

        const authInfo = {
        user,
        newUser,
        SignedUser,
        GoogleRegister
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
        return () =>{
            return unsubscribe();
        }
    })
        
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;