import Layout from '../../components/Layout'
import IsAdminRoute from '../../components/RouteProtector/IsAdminRoute'
import CategoriesAndTags from '../../components/admin/CategoriesAndTags'
export default () => { 
  return (
    <IsAdminRoute>
      <Layout>
         <CategoriesAndTags/>
      </Layout>
   
    </IsAdminRoute>
  )
}