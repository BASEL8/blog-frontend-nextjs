import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { contactFrom, contactBlogAuthorForm } from '../actions/form'
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
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Contact = ({ author, authorEmail }) => {
  const classes = useStyles();
  const [values, setValues] = useState({ name: '', email: '', message: '', error: '', success: '' })
  const { message, name, email } = values;
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (author) {
      contactBlogAuthorForm({ authorEmail, name, email, message }).then(res => {
        if (res.error) {
          return setValues({ ...values, error: res.error })
        }
        setValues({ name: '', email: '', message: '', error: '', success: res.success })
      })
    } else {
      contactFrom({ name, email, message }).then(res => {
        if (res.error) {
          return setValues({ ...values, error: res.error })
        }
        setValues({ name: '', email: '', message: '', error: '', success: res.success })
      })
    }

  }
  return (
    <>
      {values.error && <Paper className={classes.papper}>
        {values.error}
      </Paper>}
      {values.success && <Paper className={classes.papper}>
        success
      </Paper>}
      <form className={classes.container} onSubmit={handleSubmit}>
        <TextField
          id="outlined-required"
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
          id="outlined-required"
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
          id="outlined-disabled"
          label="Description"
          className={classes.textarea}
          margin="normal"
          variant="outlined"
          name="message"
          type="text"
          onChange={handleChange}
          defaultValue={values.about}
          multiline={true}
          rows={2}
          rowsMax={10}
        />
        <Button type='submit'>Send</Button>
      </form>
    </>
  )
}
export default Contact;