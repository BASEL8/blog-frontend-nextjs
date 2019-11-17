import IsAdminRoute from '../../components/RouteProtector/IsAdminRoute'
import Layout from '../../components/Layout'
import PublicProfile from '../../components/Profile/PublicProfile'
const userProfile = () => {
  return (
    <IsAdminRoute>
      <Layout>
        <PublicProfile />
      </Layout>
    </IsAdminRoute>
    
  )
}
 
export default userProfile;