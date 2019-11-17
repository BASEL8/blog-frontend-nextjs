import React, { useState, useEffect } from 'react';
import { userList } from '../../actions/blog'
import { getUserProfile, updateProfile,getProfilePhoto } from '../../actions/user'
import { isAuth, getCookie, updateUser, delateMyAccount, removeCookie, removeLocalStorage } from '../../actions/auth'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Tabs from './Tabs'
import UpdateProfile from './UpdateProfile'
import { arrayBufferToBase64 } from '../../actions/helpers'
import Router from 'next/router'
const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '90%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  buttons: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));


const PrivetProfile = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const token = getCookie('token')
  const [blogs, setBlogs] = useState([])
  const [values, setValues] = useState({ username: '', name: '', email: '', role: 0, password: '', error: false, success: false, loading: false, photo: '', userData:'', about: '' })
  const { username, name, email, error, photo, userData, role, about } = values;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const updateProfile_ = () => {
    setValues({ ...values, loading: true })
    updateProfile(token, userData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error })
        return console.log(data.error)
      }
      const { name, email, role, username, photo, about } = data
      updateUser(data, () => {
        setValues({ ...values, name, email, role, username, photo, about, loading: false, success: true, error: false })
      })
      handleClose()
    })

  }
  const handleDelete = () => {
    const user = isAuth()
    delateMyAccount(token, user).then(res => {
      console.log(res)
      if (res.error) {
        return console.log(error)
      }
      if (res.deleted) {
        removeCookie('token')
        removeLocalStorage('user')
        Router.push('/')
      }
    })
  }
  useEffect(() => {
     setValues({ ...values, userData : new FormData()})
    getUserProfile(token).then(data => {
      setValues({ ...values, loading: true })
      if (data.error) {
        setValues({ ...values, error: data.error })
      }
      const { name, email, role, username, photo, about } = data;
      setValues({ ...values, name, email, role, username, about, error: false, success: false, loading: false ,photo});
    })
    userList(token, isAuth()).then(res => setBlogs(res))
  }, [])
  return (
    <>
      <div>
        <div style={{ height: 100, width: 100, overflow: 'hidden' }}>
          <img alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '50%' }}      
          src={ photo.data?'data:image/jpeg;base64,' + arrayBufferToBase64( photo.data.data) :
                          `https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80`} 
                          alt={name} />
        </div>
        <p>Name : {name}</p>
        <p>User name : {username}</p>
        <p>Email : {email}</p>
        <p>About : {about}</p>
        <p>Admin : {role === 1 ? 'yes' : 'no'}</p>
        <div>
          <Button onClick={handleOpen}>Update</Button>
          <Button onClick={handleDelete}> delete my account </Button>
        </div>
        <Modal
          disablePortal={true}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div className={classes.paper}>
            <h2 id="simple-modal-title" className={classes.buttons}>Update</h2>
            <div>
              < UpdateProfile values={values} setValues={setValues} />
            </div>
            <div>
              <Button variant="outlined" className={classes.buttons} onClick={() => updateProfile_()} color="primary">Update</Button>
              <Button variant="outlined" className={classes.buttons} onClick={handleClose}>Cancel</Button>
            </div>
          </div>
        </Modal>
        <Tabs blogs={blogs} token={token} setBlogs={setBlogs} username={username} />
      </div>
    </>
  )
}
export default PrivetProfile;