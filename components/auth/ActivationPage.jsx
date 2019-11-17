import React, { useEffect, useState } from 'react';
import { signup, isAuth } from '../../actions/auth'
import  Link  from '../../src/Link'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Router,{ withRouter } from 'next/router'

const useStyles = makeStyles({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    maxWidth: '90%',
    minWidth: '70%',
    minHeight: '80%'
  },
});

const ActivationPage = ({router}) => {
  const classes = useStyles();
  const [values, setValues] = useState({ name: '', email: '', success: false, error: false, loading: false })
  const { name, error, success, loading, email } = values;
  const { query } = router
  const { token } = query
  useEffect(() => {
    setValues({ ...values, loading: true })
    console.log(query)
      signup(token).then(data => {
        if (data.error) {
          console.log(data)
          setValues({ ...values, error: data.error, loading: false, success: false })
        }
        else {
          console.log(data);
          setValues({ ...values, error: '', success: data.success, loading: false, name: data.name, email: data.email })
        }
      })
    
  }, [router])
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        {loading ? <CircularProgress /> :
          <>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="340"
                image={success ? "https://media.giphy.com/media/h2MLtoOjxtkGY/giphy.gif" : "https://media.giphy.com/media/1VZsOlFePhbSo/giphy.gif"}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{
                  error ? 'error'
                    :
                    `hello ${name} !!!`} </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {error ? error : success}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {error ? '' :
                <>
                  <Button size="small" color="primary" onClick={()=>Router.push({pathname:'/auth/login',query:{email:email}})}>
                    {/* <Link href="/login">
                      Login
                    </Link> */}
                    login
                  </Button>
                </>
              }
            </CardActions>
          </>
        } </Card>
    </div >
  )
}
export default withRouter(ActivationPage);