import React, { useState, useEffect } from 'react';
import { getCookie ,isAuth} from '../../actions/auth'
import { adminList,adminRemovePlog } from '../../actions/blog'
import Card from '../blog/layout/Card'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const AdminAllBlogs = () => {
  const [blogs, setBlogs] = useState([])
  const token = getCookie('token');
  useEffect(() => {
    adminList(token,isAuth())
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          setBlogs(data)
        }
      })
  }, [])

  
  const RemoveBlog = (slug) => { 
    adminRemovePlog(token, isAuth(), slug).then(res => { 
      if (res.error) {
        console.log(res.error)
      } else { 
 adminList(token,isAuth())
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          setBlogs(data)
        }
      })
      }
    })
    
  }
  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      return <Box p={1} borderColor="primary.main" border={1} mt={2}  key={i}>
        <Card blog={blog} />
        <Button variant="outlined" onClick={()=>RemoveBlog(blog.slug)}>Remove</Button>
      </Box>
    })
  }
  return (
    <div>
      <div>
        {showAllBlogs()}
      </div>
    </div>
  )

}

export default AdminAllBlogs;