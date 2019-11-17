import React,{useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flex: 1,
    flexBasis: '30%'
  },
  textarea: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%'
  },
  papper: {
    padding: 10,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: 'red'
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const UpdateProfile = ({ values, setValues }) => {
  const classes = useStyles();
 const userData = new FormData()
  const handleChange = (e) => {
    const value = e.target.name === 'photo' ? e.target.files[0] : e.target.value
    userData.set(e.target.name, value)
    setValues({ ...values, userData, error: '' })
  }
  return (
    <>
      {values.error && <Paper className={classes.papper}>
        {values.error}
      </Paper>}
      <form className={classes.container}>
        <TextField
          label="Name"
          onChange={handleChange}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="name"
          type="text"
          defaultValue={values.name}
        />
        <TextField
          label="Username"
          onChange={handleChange}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="username"
          type="text"
          defaultValue={values.username}
        />
        <TextField
          label="Email"
          onChange={handleChange}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="email"
          type="email"
          defaultValue={values.email}
        />
        <TextField
          label="Password"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="password"
          type="password"
          onChange={handleChange}
          defaultValue={values.password}
        />
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <input
            accept="image/*"
            className={classes.input}
            style={{ display: 'none' }}
            id="contained-button-file"
            onChange={handleChange}
            multiple
            type="file"
            name="photo"
          />
          <label htmlFor="contained-button-file" style={{ display: 'flex', alignItems: 'center' }}>
            <Button variant="contained" component="span" className={classes.button}> Upload Image</Button>
          </label>
          {values.photo ? <Chip label={values.photo.name} onDelete={() => setValues({ ...values, photo: '' })} color="primary" /> : <small className="text-muted m-3">Max size: 1mb</small>}

        </div>
        <TextField
          label="Description"
          className={classes.textarea}
          margin="normal"
          variant="outlined"
          name="about"
          type="text"
          onChange={handleChange}
          defaultValue={values.about}
          multiline={true}
          rows={2}
          rowsMax={10}
        />

      </form>
    </>
  )
}

export default UpdateProfile;