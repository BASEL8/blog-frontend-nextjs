import { useEffect } from 'react'
import Router from 'next/router'
import { isAuth } from '../../actions/auth'
export default({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push('/auth/login')
    }
  }, [])
  return children;
}
