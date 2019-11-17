import IsAuthRoute from '../../../components/RouteProtector/IsAuthRoute'
import Layout from '../../../components/Layout'
import PasswordReset from '../../../components/auth/PasswordReset'
export default (params) => {
  return (
    <IsAuthRoute>
      <Layout>
        <PasswordReset />
      </Layout>
    </IsAuthRoute>
  )
};
