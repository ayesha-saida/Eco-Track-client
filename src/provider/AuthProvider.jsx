import React, { children, createContext, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const AuthContext = createContext();

 const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
       { /*new user */}
       const createUser = (auth, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
       }
  
   const authData ={
    user, setUser
   }
   return <AuthContext value={authData}>{children}</AuthContext>
}

export default AuthProvider