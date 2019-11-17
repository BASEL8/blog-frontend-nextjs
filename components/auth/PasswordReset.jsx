import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
//import { useHistory } from 'react-router-dom';
import Router from 'next/router'
import { forgetPassword, isAuth } from '../../actions/auth'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: 30
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  paper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: 10,
    textAlign: 'center',
    background: 'none',
  }
}));
const ForgetPassword = () => {
  const classes = useStyles();
  const [values, setValues] = useState({ email: '', success: '', error: '', loading: false })
  const { email, success, error, loading } = values
  //const history = useHistory()

  const handleChange = (e) => {
    setValues({ ...values, email: e.target.value, error: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValues({ ...values, error: '', loading: true })
    forgetPassword({ email }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({ ...values, error: '', success: data.message })
        //history.push("/")
      }
    })
  }
  return (
    <div>
      <form className={classes.container} noValidate autoComplete="on" onSubmit={handleSubmit}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            insert you email
        </Typography>
          <Typography component="p">
            {error}
            {success}
          </Typography>
        </Paper>
        <TextField
          id="outlined-disabled"
          label="email"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="email"
          type="email"
          onChange={handleChange}
          defaultValue={values.password}
        />
        <Button variant="contained" className={classes.button} type="submit">
          {loading ? <CircularProgress /> : success ? 'success' : 'reset'}
        </Button>
      </form>
    </div>
  )
}
export default ForgetPassword;