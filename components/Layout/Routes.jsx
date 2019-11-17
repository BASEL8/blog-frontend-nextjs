import React from 'react'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Link from '../../src/Link'
import { signout, isAuth } from '../../actions/auth'
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
export default ({ side, toggleDrawer }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={side && toggleDrawer(side, false)}
      onKeyDown={side && toggleDrawer(side, false)}
    >

      {!side &&
        <List>
          <ListItem button >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={<Link href="/profile">my profile</Link>} />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={<a href="/write">write</a>} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => signout(() => Router.push('/'))} >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'logout'} />
          </ListItem>
        </List>
      }

      {side &&
        <>
          <List>
            <ListItem button >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={<Link href="/">Home</Link>} />
            </ListItem>
            <ListItem button >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={<Link href="/about">about</Link>} />
            </ListItem>
            <ListItem button >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={<Link href="/blogs">blogs</Link>} />
            </ListItem>
            {isAuth() && <>
              <ListItem button >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={<Link href="/profile">my profile</Link>} />
              </ListItem>
              <ListItem button >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={<a href="/write">write</a>} />
              </ListItem>
              {isAuth() && isAuth().role === 1 && <ListItem button >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={<a href="/admin">admin</a>} />
              </ListItem>}
            </>}
          </List>
          <Divider />
          <List>
            {!isAuth() ? <><ListItem button >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={<Link href="/auth/login">login</Link>} />
            </ListItem>
              <ListItem button >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={<Link href="/auth/signup">signup</Link>} />
              </ListItem></> :
              <ListItem button onClick={() => signout(() => { toggleDrawer('left', true); Router.push('/') })} >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'logout'} />
              </ListItem>
            }
          </List>
        </>
      }</div>
  );
}