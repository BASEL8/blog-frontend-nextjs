import React, { useState, useEffect } from 'react';
import Tabs from './Tabs'
import { getPublicProfile } from '../../actions/user'
import { arrayBufferToBase64 } from '../../actions/helpers'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Router, { withRouter } from 'next/router'

const useStyles = makeStyles(theme => {
  return ({
    infoHolder: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'left',
      background: `linear-gradient( 397.7deg,  rgba(0,0,0,1) 70.3%, ${theme.palette.primary.main} 88.8% )`,
      padding: 20,
      flexBasis: 400
    },
    nameHolder: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 40,
      paddingBottom: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: 200,
      minWidth: 400
    },
    followIcon: {
      marginLeft: 10
    },
    socialHolder: {
      width: '100%',
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-around'
    }
  })
});

const PublicProfile = ({ router }) => {
  const classes = useStyles()
  const [blogs, setBlogs] = useState([])
  const [values, setValues] = useState({ username: '', name: '', email: '', role: 0, password: '', error: false, success: false, loading: false, photo: '', userDate: '', about: '' })
  const { username, name, email, photo, about } = values;
  const { query } = router;
  useEffect(() => {
    if (query.username) {
      getPublicProfile(query.username).then(data => {
        console.log(data)
        if (data.error) {
          return console.log(data.error)
        }
        const { name, email, role, username, photo, about } = data.user
        setValues({ ...values, name, email, role, username, photo, about })
        setBlogs(data.blogs)
      })
    }

  }, [router.query.username])
  return (
    <div>
      <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap' }}>
        <div style={{
          background: `
         linear-gradient( 89.7deg,  rgba(0,0,0,0.7) -10.7%, rgba(53,92,125,0.4) 88.8% ), url("${photo && photo.data && 'data:image/jpeg;base64,' + arrayBufferToBase64(photo.data.data)}") no-repeat center / cover `,
          backgroundSize: 'cover', backgroundPosition: 'center', minHeight: 500, flex: 1, flexBasis: '40%', color: 'white', position: 'relative'
        }}>
          <div className={classes.nameHolder}>
            <Fab variant="extended" aria-label="like" color="primary" className={classes.fab}>
              Follow <AddCircleIcon className={classes.followIcon} /></Fab>
            <Box fontSize={70}>{name}</Box>
            <div className={classes.socialHolder}>
              <span>instagram : -</span>
              <span>twitter : -</span>
              <span>linked : -</span>
            </div>
          </div>
        </div>
        <div className={classes.infoHolder}>
          <div style={{ height: '100%', width: '100%', backgroundColor: 'black', color: 'white', padding: 15 }}>
            <p>About</p>
            <Box fontWeight="fontWeightLight" fontStyle="oblique" fontFamily="Monospace" letterSpacing={2} lineHeight={2} color="lightgray" >
              {about}
            </Box>

          </div>
        </div>
      </div>
      <Tabs blogs={blogs} username={username} authorEmail={email} />
    </div>
  )
}
export default withRouter(PublicProfile)