import Footer from './Footer'
import Header from './Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
export default ({ children }) => {
  return (
    <>
      <Header/>
      <CssBaseline/>
      <Container>
        <Typography component="div" style={{ minHeight: '100vh' }}>
      {children}
        </Typography>
      </Container>
      <Footer/>
      </>
  )
}
