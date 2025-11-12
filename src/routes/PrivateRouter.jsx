import { use } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate } from 'react-router'
import Loading from '../components/Loading'

const PrivateRouter = ({children}) => {
    const {user, loading} = use(AuthContext)
    if(loading){
        return <Loading /> 
    }
    if(user) {
        return children
    }
  return <Navigate to={'/login'}></Navigate>
}

export default PrivateRouter