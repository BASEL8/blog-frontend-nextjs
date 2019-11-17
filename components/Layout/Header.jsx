import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import CustomBar from './CustomBar'
import { signout, isAuth } from '../../actions/auth'
import MyRoutes from './Routes'




function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};




export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };


  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar>
          <AppBar>
            <CustomBar isAuth={isAuth} onToggle={toggleDrawer('left', true)} />
          </AppBar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Toolbar />
      <CssBaseline />
      <Container>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {<MyRoutes side="left" toggleDrawer={toggleDrawer} />}
        </Drawer>
      </Container>
    </div>
  );
}