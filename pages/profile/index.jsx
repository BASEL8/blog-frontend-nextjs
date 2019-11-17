import Private from '../../components/Profile/Private'
import Layout from '../../components/Layout'
import IsAuthRoute from '../../components/RouteProtector/IsNotAuthRoute'

export default () => {
  return (
    <IsAuthRoute>
      <Layout>
        <Private></Private>
      </Layout>
    </IsAuthRoute>
  )
};