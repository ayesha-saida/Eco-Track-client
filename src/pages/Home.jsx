import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import auth from '../firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import Category from '../components/Category';
import Complain from '../components/Complain';

const Home = () => {
 const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

 if (user) {
    const uid = user.uid;
     console.log('User is signed in', uid)
  } else {
   console.log('User is signed out')
  }

  return (
    <div className='bg-color'>
      <Slider></Slider>
      <Category></Category>
      <Complain></Complain>
    </div>
  )
}

export default Home