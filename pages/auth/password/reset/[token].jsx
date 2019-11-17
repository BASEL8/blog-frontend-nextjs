import IsAuthRoute from '../../../../components/RouteProtector/IsAuthRoute'
import Layout from '../../../../components/Layout'
import PasswordResetForm from '../../../../components/auth/ResetPasswordForm'
export default () => {
  return (
    <IsAuthRoute>
      <Layout>
        <PasswordResetForm />
      </Layout>
    </IsAuthRoute>
  )
};
