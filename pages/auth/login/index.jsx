import Layout from '../../../components/Layout'
import Login from '../../../components/auth/Login'
import IsAuthRoute from '../../../components/RouteProtector/IsAuthRoute'
export default () => { 
  return (
    <Layout>
      <IsAuthRoute>
         <Login/>
      </IsAuthRoute>
    </Layout>
  )
};