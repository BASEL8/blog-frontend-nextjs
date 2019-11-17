import Write from '../../components/blog/Write'
import Layout from '../../components/Layout'
import IsNotAuth from '../../components/RouteProtector/IsNotAuthRoute'
export default () => {
  return (
    <IsNotAuth>
      <Layout>
        <Write />
      </Layout>
    </IsNotAuth>

  )
};