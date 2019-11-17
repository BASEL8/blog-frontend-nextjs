import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../actions/user'
import { getCookie, isAuth } from '../../actions/auth'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import  Link  from '../../src/Link'
import { adminRemoveUser } from '../../actions/auth'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
const AdminAllUsers = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [values, setValues] = useState({ users: [], error: false, success: '', loading: false })
  const { users } = values;
  const token = getCookie('token');
  const admin = isAuth()
  const getAll = () => getAllUsers(token, admin).then(res => {
    if (res.error) {
      return setValues({ ...values, error: res.error, loading: false })
    }
    setValues({ users: res, error: '', success: true, loading: false })
  })
  const handleRemoveUser = (id) => {
    adminRemoveUser(token, id).then(res => {
      if (res.error) {
        return setValues({ ...values, error: res.error })
      }
      getAll()
    })
  }
  useEffect(() => {
    setValues({ ...values, loading: true })
    getAll()
  }, [])

  const showUsers = () => {
  return users.sort((a, b) => (a.role < b.role) ? 1 : ((b.role < a.role) ? -1 : 0))
      .map((user, index) => <ExpansionPanel key={index} expanded={expanded === `panel${user._id}`} onChange={handleChange(`panel${user._id}`)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{user.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column}>
            <Chip label="Tag" onDelete={() => { }} />
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              {user.email}
              <br />
              {user.role === 1 ? 'admin' : 'user'}
              <br />
              <Link href={`/profile/${user.username}`} className={classes.link}>
                profile
              </Link>
              <br />
              {user.createdAt}
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Email
          </Button>
          <Button size="small" color="primary" onClick={() => handleRemoveUser(user._id)}>
            Remove
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>) 
  }
  return (
    <>

      <div className={classes.root}>
        {showUsers()}
      </div>
    </>

  )
}

export default AdminAllUsers;