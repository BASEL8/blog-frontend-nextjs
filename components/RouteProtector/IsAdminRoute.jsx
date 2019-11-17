import { useEffect } from 'react'
import Router from 'next/router'
import { isAuth } from '../../actions/auth'
const IsAdminRoute = ({ children }) => {
  useEffect(() => {
    if (isAuth()) {
      if (isAuth().role !== 1) {
        Router.push('/')
      }
    } else {
      Router.push('/signin')
    }
  }, [])
  return children
}
export default IsAdminRoute;