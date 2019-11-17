import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
//import { useHistory, useParams } from 'react-router-dom';
import Router, { withRouter} from 'next/router'
import { resetPassword, isAuth } from '../../actions/auth'
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

const ResetPasswordForm = ({router}) => {
  const classes = useStyles();
  const [values, setValues] = useState({ password: '', repatPassword: '', success: '', error: '', loading: false })
  const { password, repatPassword, success, error, loading } = values
  //const history = useHistory()
  const { query } = router
  const { token } = query
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value, error: '' })
  }
      console.log(token)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === repatPassword) {
      setValues({ ...values, error: '', loading: true })
      resetPassword(token, password).then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: '', loading: false })
        } else {
          setValues({ password: '', repatPassword: '', error: '', success: data.message, loading: false })
          console.log(data)
          Router.push({ pathname: '/auth/login', query: { email: data.email } })
        }
      })
    } else {
      setValues({ ...values, repatPassword: '', error: 'passwords not match' })
    }


  }
  return (
    <div>
      <form className={classes.container} noValidate autoComplete="on" onSubmit={handleSubmit}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            insert new password
        </Typography>
          <Typography component="p">
            {error}
            {success}
          </Typography>
        </Paper>
        <TextField
          label="password"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="password"
          type="password"
          onChange={handleChange}
          defaultValue={values.password}
        />
        <TextField
          label="repat password"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name="repatPassword"
          type="password"
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
export default withRouter(ResetPasswordForm);