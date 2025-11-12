import  {  createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

       { /*new user */}
       const createUser = ( email, password) => {
         setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
       }

       const signInUser = (email, password) => {
         setLoading(true)
        return  signInWithEmailAndPassword(auth, email, password)
       }

       /*Current signIn user Info */
      useEffect(() => {
         //set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     console.log('current user in auth state change', currentUser)
   setUser(currentUser)
   setLoading(false)
   });
    //clear the observer 
    return () =>{ unsubscribe() }
  }, []);       

       const signOutUser = () => {
         setLoading(true)
        return signOut(auth)
       }

    {/*   const updateProfileImg = () => {
        return   updateProfile(auth.currentUser, {
  displayName: name,  photoURL: photoURL
})   }  */}
  
   const authData = {
   createUser, signInUser, user, signOutUser, setLoading
   }
   return (<AuthContext value={authData}>{children}</AuthContext>)
}

export default AuthProvider