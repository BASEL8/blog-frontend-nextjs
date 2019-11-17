import { useState, useEffect } from 'react'
import Head from 'next/head'
import Router, { withRouter } from 'next/router'
import Link from '../../src/Link'
import Layout from '../../components/Layout'
import { getCookie,isAuth } from '../../actions/auth'
import { singleBlog, listRelated, singleBlogPart } from "../../actions/blog";
import { API, DOMAIN, NAME, FB_APP_ID_ } from "../../config";
import { Cookie, withCookie } from 'next-cookie'
import moment from 'moment'
import renderHTML from 'react-render-html';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import DisqusThread from './DisqusThread'
import GradeIcon from '@material-ui/icons/Grade';
import Card from '../../components/blog/layout/Card'
import {arrayBufferToBase64} from '../../actions/helpers'
const useStyles = makeStyles(theme => ({
  root: { display: 'flex', flexDirection: 'column' },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  userInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20
  },
  userPhotoHolder: {
    background: 'green',
    padding: 1,
    marginRight: 10,
    borderRadius: '50%',
    position: 'relative',
    zIndex: 99,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userPhotoMain: {
    background: 'white',
    height: 65,
    width: 65,
    borderRadius: '50%',
    zIndex: 92,
    padding: 2,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    padding: 3,
    flex: 1,
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '50%'
  },
  userProfileExtra: {
    position: 'absolute',
    width: 70,
    height: 25,
    backgroundColor: 'white',
    zIndex: 90
  },
  mainImage: {
    height: 400,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 25,
    marginTop: 25
  },
  bodyHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  LoginButton: {
    width: '50%',
    marginTop: 20
  },
  thumbUpHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  thumbUpLogo: {
    width: 35,
    height: 35,
    borderRadius: '50%',
    border: '1px solid lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    padding: 3,
  }
}));
const SinglePage = ({ blog, query }) => {
  const classes = useStyles();
  const [related, setRelated] = useState([]);
  const token = getCookie('token')
  const loadRelated = () => {
    listRelated({ _id: blog._id, categories: blog.categories }).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });
  };
  useEffect(() => {
    loadRelated();
  }, []);

  const head = () => (
    <Head>
      <title>
        {blog.title} | {NAME}
      </title>
      <meta name="description" content={blog.mdesc} />
      <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:title" content={`${blog.title}| ${NAME}`} />
      <meta property="og:description" content={blog.mdesc} />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:site_name" content={`${NAME}`} />
      <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
      <meta property="og:image:secure_url" ccontent={`${API}/blog/photo/${blog.slug}`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID_}`} />
    </Head>
  );

  const showBlogCategories = blog => (
    <ButtonGroup size="small" aria-label="small outlined button group">
      {
        blog.categories.map((c, i) => (
          <Button key={i} onClick={() => Router.push(`/categories/${c.slug}`)}>
            {c.name}
          </Button>
        ))
      }
    </ButtonGroup>
  );

  const showBlogTags = blog =>(
    <ButtonGroup size="small" aria-label="small outlined button group">
      {
        blog.tags.map((c, i) => (
          <Button key={i} onClick={() => Router.push(`/tags/${c.slug}`)}>
            {c.name}
          </Button>
        ))
      }
    </ButtonGroup>
  )

  const showRelatedBlog = () => {
    return related.map((blog, i) => (
      <div key={i} style={{margin:5,flex:1}}>
      <Card blog={blog}  />
      </div>
    ));
  };
  const showDisqusThread = () => {
    return (<div>
      <DisqusThread id={blog._id} title={blog.title} path={`/blog/${blog.slug}`} />
    </div>)
  }
  return (
    <>
      {head()}
      <Layout>
        <div>
          <div className={classes.root}>
            <div>
              <div>
                <h3 style={{textAlign:'center'}}>{blog.title}</h3>
                <div className={classes.userInfo}>
                  <div className={classes.userPhotoHolder}>
                    <div  className={classes.userPhotoMain}>
                      <img  className={classes.userProfilePhoto}    
                      src={'data:image/jpeg;base64,' + Buffer.from(blog.postedBy.photo.data.data, 'base64').toString('base64') }
                      alt={blog.postedBy&&blog.postedBy.name}/>
                    </div>
                    <div className={classes.userProfileExtra}></div>
                  </div>
                  <div style={{ fontSize: 13 }}>
                    <div style={{ display: 'flex',alignItems:'center' }}>
                      <Button onClick={()=>Router.push({ pathname: isAuth() && isAuth().username === blog.postedBy.username ? `/profile` : `/profile/${blog.postedBy.username}`, state: {username:blog.postedBy.username}})}>  written by {blog.postedBy.name}</Button> 
                      <Button variant="outlined" size="small" style={{ marginLeft: 15 }} className={classes.margin}>follow</Button>
                    </div>
                    <div>
                      {moment(blog.updatedAt).fromNow()}
                      <span style={{marginLeft : 20}}> {blog.timeToRead} min read</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={classes.mainImage}>
              <img
                src={`${API}/blog/photo/${blog.slug}`}
                alt={blog.title}
                style={{ width: '100%',objectFit:'scale-down' }}    
          />
            </div>
          </div>
          <div>
            <section  className={classes.bodyHolder}>
              {
                token ?
                  <div className="blogText">{renderHTML(blog.body)}</div>
                  :
                  <>
                    <div className="blogText">{blog.excerpt}</div>
                  <Button variant="contained" className={classes.LoginButton}>
                      <Link href='/auth/login'>Login to read more</Link>
                    </Button>
                  </>
              }
            </section>
          </div>
          <div style={{ marginBottom: 15,marginTop:20 }}>
            <div style={{ marginBottom: 15 }}>
  {showBlogCategories(blog)}
            </div>
            <div>
              {showBlogTags(blog)}
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start',marginTop:15}}>
              <div 
              style={{ width: 55, height: 55, borderRadius: '50%', border: '1px solid lightgray' ,display:'flex',alignItems:'center',justifyContent:'center'}} className="d-flex align-items-center justify-content-center">
               <GradeIcon/>
              </div>
              <p style={{marginLeft : 15}}>1 star</p>
            </div>
          </div>
          <div className="">
            <h4>Related blogs</h4>
            <div style={{ display: 'flex' }}>
              {showRelatedBlog()}
            </div>

          </div>

          <div className=" pb-5">
            <p>show comments</p>
          </div>
        </div>
        {showDisqusThread()}
      </Layout>
    </>
  );
}

SinglePage.getInitialProps = (ctx) => {

  const token = ctx.cookie.get('token')
  console.log(token)
  if (token) {
    return singleBlog(token, ctx.query.slug)
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          return {
            blog: data, query: ctx.query
          };
        }
      });
  } else {
    return singleBlogPart(ctx.query.slug).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        return {
          blog: data, query: ctx.query
        };
      }
    });
  }

};
export default withCookie(withRouter(SinglePage))