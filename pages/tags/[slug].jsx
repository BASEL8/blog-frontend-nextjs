import Layout from '../../components/Layout'
import CategoryPage from '../../components/CategoryPage'

import { getTag } from '../../actions/tag'
import {withRouter} from 'next/router'

const Category  = ({blogs,category} )=>{
  console.log(blogs)
  return (
    <Layout>
    <CategoryPage blogs={blogs} category={category}/>
     </Layout>
  )
}


Category.getInitialProps = (ctx) => {
const {query} = ctx
const {slug}= query
  return getTag(slug)
    .then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        return {
          blogs : data.blogs,
          category : data.tag
        };
      }
    });
};

export default withRouter(Category);