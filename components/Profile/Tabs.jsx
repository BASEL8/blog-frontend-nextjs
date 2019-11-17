import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '../blog/layout/Card'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { isAuth } from '../../actions/auth'
import { userList, userRemovePlog } from '../../actions/blog'
import Button from '@material-ui/core/Button';
import Contact from '../Contact';
import Router from 'next/router'
import SmallCard from '../blog/layout/SmallCard'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'theme.palette.background.paper',
  },
  BlogsHolder: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems:'center'
  }
}));

const MyTabs = ({token , blogs , setBlogs,username ,authorEmail}) => {
   const [value, setValue] = useState(0);
  const classes = useStyles()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const RemoveBlog = (slug) => {
    userRemovePlog(token, isAuth(), slug).then(res => {
      if (res.error) {
        console.log(res.error)
      } else {
        userList(token, isAuth())
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
  const ShowBlogs = () => {
    return blogs.map((blog, i) =>  <SmallCard key={i} blog={blog} >
     {isAuth()&&isAuth().username === username && <ButtonGroup size="small" aria-label="small outlined button group">
        <Button variant="outlined" onClick={() => RemoveBlog(blog.slug)}>Remove</Button>
        <Button variant="outlined" onClick={() => Router.push({ pathname: '/write/update/' + blog.slug, state: {user:isAuth().email}})}>edit</Button>
        </ButtonGroup>}
    </SmallCard>
    )
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
          <Tab label="Blogs" {...a11yProps(0)} />
          <Tab label="Claps" {...a11yProps(1)} />
          <Tab label="contact author" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Box className={classes.BlogsHolder}>
          {ShowBlogs()}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contact author={true} authorEmail={authorEmail}/>
      </TabPanel>
    </div>
  );
}

export default MyTabs;