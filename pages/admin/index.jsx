import AdminPage from '../../components/admin'
import Layout from '../../components/Layout'
import IsAdminRoute from '../../components/RouteProtector/IsAdminRoute'

export default () => {
  return (
    <IsAdminRoute>
      <Layout>
        <AdminPage />
      </Layout>
    </IsAdminRoute>
  )
}