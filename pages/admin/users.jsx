import Layout from '../../components/Layout'
import IsAdminRoute from '../../components/RouteProtector/IsAdminRoute'
import Users from '../../components/admin/Users'
export default () => { 
  return (
      <Layout>
         <Users/>
      </Layout>
     )
}