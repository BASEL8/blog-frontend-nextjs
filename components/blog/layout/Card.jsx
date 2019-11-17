import Link from '../../../src/Link'
import Router from 'next/router'
import moment from 'moment';
import { API } from '../../../config'
import { isAuth } from '../../../actions/auth'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'theme.palette.background.paper',
  },
  holder: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    overflow: 'hidden'
  },
  categoryLink: {
    color: 'gray',
    textDecoration: 'none'
  },
  CategoryText: {
    textDecoration: 'uppercase',
    color: 'darkblue'
  },
  tagLink: {
    color: 'gray',
    textDecoration: 'none'
  },
  tagText: {
    textDecoration: 'uppercase',
    color: 'darkred'
  }
}));
const Card = ({ blog }) => {
  const classes = useStyles()
  const ShowBlogTags = () => {
    return blog.tags.map((category, i) => (
      <Link key={i} href={`/tags/${category.slug}`} className={classes.tagLink}>
        <span>{category.name}</span>
      </Link>
    ))
  }

  return (
    <Box boxShadow={1} m={0} p={2} style={{ display: 'flex', marginTop: 10, marginBottom: 10,flexWrap:'wrap' }}>
      <div style={{ flex: 1,flexBasis:400 }} className={classes.holder}>
        <div  >
         {blog.postedBy ? <div>
            <Button
              onClick={()=>Router.push({
                pathname:
                  isAuth() && isAuth().username === blog.postedBy.username ?
                    `/profile` :
                    `/profile/${blog.postedBy.username}`
              })}
            >  written by {blog.postedBy.name}</Button>
            -  published {moment(blog.updatedAt).fromNow()} - {blog.timeToRead} min read
          </div> : 'user removed'}
        </div>
        <Link href={`/blogs/${blog.slug}`}>
          <h6 className="font-wight-bold">{blog.title}</h6>
        </Link>
          <p style={{ fontSize: 15 , wordWrap: 'break-word',textOverflow: 'wrap'}}>{blog.excerpt}</p>
          <Link href={`/blogs/${blog.slug}`}>
              <span className="btn btn-outline-primary btn-lg btn-sm border-0">
                read more
               </span>
          </Link>
          {ShowBlogTags()}
      </div>
      <div style={{ height: 200, width: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' ,flexBasis:200,flex:1}}>
        <img style={{ height: '100%', width: '100%' ,objectFit:'contain'}} src={`${API}/blog/photo/${blog.slug}`} />
      </div>
    </Box>

  )
}
export default Card