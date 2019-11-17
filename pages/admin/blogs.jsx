import Layout from '../../components/Layout'
import IsAdminRoute from '../../components/RouteProtector/IsAdminRoute'
import AllBlogsAdmin from '../../components/admin/AllBlogsAdmin'
export default () => { 
  return (
    <IsAdminRoute>
      <Layout>
          <AllBlogsAdmin/>
      </Layout>
   
    </IsAdminRoute>
  )
}