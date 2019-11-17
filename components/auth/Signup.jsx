import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { preSignup, isAuth } from '../../actions/auth'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: 30,
    flex: 1
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
    padding: 10,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    background: 'none',
    textAlign: 'center'
  },
  successMessage: {
    marginTop: 10,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: 10,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none'
  }
}));
const Signup = () => {
  const classes = useStyles();
  const [values, setValues] = useState({ email: '', password: '', name: '', error: false, success: false, loading: false })
  const { error, password, email, name, success, loading } = values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value, error: '', success: '' })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setValues({ ...values, error: '', loading: true })
    preSignup({ name, password, email })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false, success: '' })
        } else {
          setValues({ email: '', name: '', password: '', error: '', success: data.success, loading: false })
        }
      })
  }
  return (
    <form className={classes.container} noValidate autoComplete="on" onSubmit={handleSubmit}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Signup
           </Typography>
        <Typography component="p">
          {error}
        </Typography>
      </Paper>
      {success ?
        <Paper className={classes.successMessage}>
          <Typography component="h5">
            {success}
          </Typography>
        </Paper>
        :
        <>
          <TextField
            label="Name"
            onChange={handleChange}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            name="name"
            type="text"
            value={name}
          />
          <TextField
            label="Email"
            onChange={handleChange}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            name="email"
            type="email"
            value={email}
          />
          <TextField
            id="outlined-disabled"
            label="Password"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
          />
          <Button variant="contained" className={classes.button} type="submit">
            {loading ? <CircularProgress /> : 'Signup'}
          </Button>
        </>
      }
    </form>
  )
}
export default Signup;