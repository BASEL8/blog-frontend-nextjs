import Layout from '../../../components/Layout'
import Signup from '../../../components/auth/Signup'
import IsAuthRoute from '../../../components/RouteProtector/IsAuthRoute'

export default () => {
  return (
    <IsAuthRoute>
      <Layout>
        <Signup />
      </Layout>
    </IsAuthRoute>

  )
};