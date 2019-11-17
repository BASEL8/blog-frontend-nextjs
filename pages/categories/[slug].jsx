import Layout from '../../components/Layout'
import CategoryPage from '../../components/CategoryPage'

import { getCategory } from '../../actions/category'
import {withRouter} from 'next/router'

const Category  = ({blogs,category} )=>{
  return (
    <Layout>
    <CategoryPage blogs={blogs} category={category}/>
     </Layout>
  )
}


Category.getInitialProps = (ctx) => {
const {query} = ctx
  const { slug } = query
  console.log(query)
  return getCategory(slug)
    .then(data => {
      console.log(data)
      if (data.error) {
        console.log(data.error);
      } else {
        return {
          blogs : data.blogs||[],
          category : data.category||''
        };
      }
    });
};

export default withRouter(Category);