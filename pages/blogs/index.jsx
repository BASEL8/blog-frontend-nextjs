import { useState } from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { getCookie } from '../../actions/auth'
import Layout from '../../components/Layout'
import Card from '../../components/blog/layout/Card'
import { listBlogWithCategoriesTags } from "../../actions/blog";
import { DOMAIN, NAME, FB_APP_ID_ } from "../../config";
import { Cookie, withCookie } from 'next-cookie'

const Blogs = ({ blogs = [], totalBlogs, blogsLimit, blogsSkip, router }) => {
  const [limit, setLimit] = useState(blogsLimit)
  const [skip, setSkip] = useState(blogsSkip)
  const [size, setSize] = useState(totalBlogs)
  const [loadedBlogs, setLoadedBlogs] = useState([])
  const token = getCookie('token');

  const head = () => {
    return <Head>
      <title>Programming blogs | {NAME}</title>
      <meta
        name="description"
        content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta property="og:title" content={`Latest web developoment tutorials | ${NAME}`} />
      <meta
        property="og:description"
        content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
      />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${NAME}`} />

      <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
      <meta property="og:image:secure_url" ccontent={`${DOMAIN}/static/images/seoblog.jpg`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID_}`} />
    </Head>
  }

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      return <div key={i}>
        <Card blog={blog} />
      </div>
    })
  }
  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogWithCategoriesTags(token, skip, limit).then((data) => {
      if (data.error) {
        console.log(error)
      }
      setLoadedBlogs([...loadedBlogs, ...data.blogs]);
      setSize(data.size)
      setSkip(toSkip)

    })
  }
  const loadMoreButton = () => {
    return (
      size > 0 && size >= limit && (<button onClick={loadMore} className="btn btn-outline-primary btn-lg w-100">load more</button>)
    )
  }
  const showLoadedBlogs = () => {
    return loadedBlogs.map((blog, i) => (
      <article key={i}>
        <Card blog={blog} />
      </article>
    ));
  };
  return (
    <>
      <>
        {head()}
        <Layout>
          <main>
            <div className="container">
              {showAllBlogs()}
            </div>
            <div className="container">{showLoadedBlogs()}</div>
            <div className="container">
              <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
            </div>

          </main>
        </Layout>
      </>
    </>
  )
}
Blogs.getInitialProps = (ctx) => {
  let skip = 0;
  let limit = 5;
  const token = ctx.cookie.get('token')
  console.log('1')
  return listBlogWithCategoriesTags(token || ctx.query.token, skip, limit)
    .then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data)
        return {
          blogs: data.blogs,
          categories: data.categories,
          tags: data.tags,
          totalBlogs: data.size,
          blogsLimit: limit,
          blogsSkip: skip
        };
      }
    });
};

export default withCookie(withRouter(Blogs));