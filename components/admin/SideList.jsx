import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '../../src/Link'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SideList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemText primary={<Link href="/admin/users">All Users</Link>} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={<Link href="/admin/blogs">All Blogs</Link>} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={<Link href="/admin/categories-tags">All Tags and Categories</Link>} />
      </ListItem>
    </List>
  );
}