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
 

       /*existing user */
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


    /* logout */
       const signOutUser = () => {
         setLoading(true)
        return signOut(auth)
       }


   const updateUserProfile = async (name, photoURL) => {
    if (!auth.currentUser) return;

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      await auth.currentUser.reload(); // refresh Firebase user data
      setUser({ ...auth.currentUser }); // update local state 
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  
   const authData = {
   createUser, signInUser, user, signOutUser, setLoading, updateUserProfile
   }
   return (<AuthContext value={authData}>{children}</AuthContext>)
}

export default AuthProvider