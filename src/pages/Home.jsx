import { use } from 'react'
import Slider from '../components/Slider'
import Category from '../components/Category';
import Complain from '../components/Complain';
import States from '../components/States';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
  const {user} = use(AuthContext)

 if (user) {
    const uid = user.uid;
     console.log('User is signed in', uid)
  } else {
   console.log('User is signed out')
  }

  return (
    <div className=''>
      <Slider></Slider>
      <Category></Category>
      <Complain></Complain>
      <States></States>
    </div>
  )
}

export default Home