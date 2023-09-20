import React, {useContext} from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'
import { Context } from '../../contexts/Store'

function AuthRoute({children}) {
    const {state} = useContext(Context)
    const is_verified = state.user_data.is_verified;
    const access_token = state.user_data.access_token
    const [searchparams] = useSearchParams()
    const nextPath = searchparams.get('next') ? searchparams.get('next'): "/"


  return (
    !is_verified ? children : <Navigate to={nextPath} />
  )
}

export default AuthRoute