import { useState, useEffect } from 'react';
import { getData } from '../../actions/admin'
import { getCookie } from '../../actions/auth'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LocalOfferSharpIcon from '@material-ui/icons/LocalOfferSharp';
import CategorySharpIcon from '@material-ui/icons/CategorySharp';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default () => {
  const classes = useStyles();
  const [data, setData] = useState({ blogs: 0, users: 0, categories: 0, tags: 0 })
  const { blogs, users, categories, tags } = data;
  const token = getCookie('token')
  useEffect(() => {
    getData(token).then(res => {
      if (res.error) {
        return console.log(res.error)
      }
      const { blogs, users, categories, tags } = res
      setData({ blogs, users, categories, tags })
    })
  }, [])
  return (

    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DescriptionSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Blogs" secondary={blogs} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Users" secondary={users} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalOfferSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Tags" secondary={tags} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CategorySharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Categories" secondary={categories} />
      </ListItem>
    </List>
  )
}