import Link from '../../../src/Link'
import Router from 'next/router'
import moment from 'moment';
import { API } from '../../../config'
import { isAuth } from '../../../actions/auth'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
const Card = ({ blog ,small}) => {
  const classes = useStyles()
  return (
    <Grid item md={12} md={small ? 4 :12} >
     <Box boxShadow={1} m={0} p={2} style={{ display: 'flex', marginTop: 10, marginBottom: 10, flexWrap: 'wrap' }}>
       <div style={{ height: 200, width: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' ,flexBasis:200,flex:1}}>
        <img style={{ height: '100%', width: '100%' ,objectFit:'contain'}} src={`${API}/blog/photo/${blog.slug}`} />
      </div>
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
      </div>
    </Box>
    </Grid>
   )
}
export default Card