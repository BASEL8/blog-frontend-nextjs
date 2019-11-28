import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import { isAuth, signout } from '../../actions/auth';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import { NAME } from '../../config'
import Search from './SearchCopy'
import ListItemText from '@material-ui/core/ListItemText';
import Router from 'next/router'
import ListItem from '@material-ui/core/ListItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function CustomBar({ onToggle, isAuth, width }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <Toolbar>
      <Hidden mdUp>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onToggle}>
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Typography variant="h6" className={classes.title}>{NAME}</Typography>
      <Search />
      <Hidden smDown>
        <div style={{ display: 'flex', flex: 1 }}>
          <ListItem button><ListItemText onClick={() => Router.push('/')}>Home</ListItemText></ListItem>
          <ListItem button> <ListItemText onClick={() => Router.push('/about')}>About</ListItemText></ListItem>
          <ListItem button> <ListItemText onClick={() => Router.push('/blogs')}>Blogs</ListItemText></ListItem>
          {!isAuth() && <ListItem button><ListItemText onClick={() => Router.push('/auth/login')}>Login</ListItemText></ListItem>}
        </div>
        {isAuth() &&
          <>
            <Button
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <AccountCircleSharpIcon />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={() => { return Router.push('/profile') }} >Profile</MenuItem>
                        <MenuItem onClick={() => { return Router.push('/admin') }} >admin</MenuItem>
                        <MenuItem ><a href="/write">write</a></MenuItem>
                        <MenuItem onClick={() => signout(() => Router.push('/'))}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </>
        }
      </Hidden >
    </Toolbar >
  );
}
CustomBar.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
export default withWidth()(CustomBar);