import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
//import { useHistory, useLocation } from 'react-router-dom';
import  Link  from '../../src/Link'
import { login, authenticate, isAuth } from '../../actions/auth'
import SigninWithGoogle from './SigininWithGoogle'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress';
import Router, { withRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
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
  googleButtonHolder: {
    paddingBottom: 10
  }, paper: {
    padding: 10,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    background: 'none',
    textAlign: 'center'
  }
}));
const Login = ({router}) => {
  const classes = useStyles();
  const [values, setValues] = useState({ email: '', password: '', error: '', loading: false, success: false })
  const { error, email, password, loading } = values;
  const { query } = router;
  useEffect(() => {
   if (query.email) {
      setValues({ ...values, email:query.email })
   }
  }, [router])
  console.log(email)
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value, error: '' })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { password, email } = values
    setValues({ ...values, error: '', loading: true })
    login({ password, email }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false })
      } else {
        setValues({ ...values, error: '', loading: false })
        authenticate(data, () => Router.push("/"))
      }
    })
  }
  return (
    <div>
      <form className={classes.container} noValidate autoComplete="on" onSubmit={handleSubmit}>
       {/* <div  className={classes.textField}>
           <SigninWithGoogle />
      </div> */}
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            Login
           </Typography>
          <Typography component="p">{error}</Typography>
        </Paper>
        <TextField
          id="outlined-required"
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
          defaultValue={password}
        />
        <div>
          <Button variant="outlined" className={classes.button}>
            <Link href="/auth/password" style={{ textDecoration: 'none', color: 'gray' }}>Forget my password</Link>
          </Button>
        </div>
        <Button variant="contained" className={classes.button} type="submit">
          {loading ? <CircularProgress /> : 'Login'}
        </Button>
      </form>
    </div >
  )
}
export default withRouter(Login);