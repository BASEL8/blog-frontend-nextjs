import { useEffect } from 'react'
import Router from 'next/router'
import { isAuth } from '../../actions/auth'
const IsAuthRoute = ({ children }) => {
  useEffect(() => {
    if (isAuth()) {
      Router.push('/')
    }
  }, [])
  return children;
}
export default IsAuthRoute;