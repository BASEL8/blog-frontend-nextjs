import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core'
import { searchList } from '../../actions/blog'
import Link from '../../src/Link'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';


const useStyles = makeStyles(theme => ({

  textField: {
    margin: 0,
    flex: 1
  },
  searchResultHolder: {
    width: '100%',
    minHeight: 100,
    position: 'absolute',
    top: '102%',
    left: 0,
    zIndex: 99,
    padding: 5,
    background: 'white'
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginLeft: 20,
    marginRight: 20,
    flex: 1
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Search = () => {
  const classes = useStyles()
  const [searchResult, setSearchResult] = useState([])
  const [value, setValue] = useState('')
  const [toggle, setToggle] = useState(false)
  const searchBar = useRef();
  const handleClick = e => {
    if (searchBar.current.contains(e.target)) {
      return;
    }
    setSearchResult([])
    setValue('')
    setToggle(false)
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  const handleChange = (e) => {
    setValue(e.target.value)
    e.target.value.length % 4 === 0 && searchList({ value: e.target.value }).then(res => setSearchResult(res))
  }

  const renderRow = (props) => {
    const { index, style, data } = props;
    console.log(props)
    return (
      <ListItem button style={style} key={index}>
        <Link href={`/blogs/${data[index].slug}`} onClick={() => { setValue(''); setSearchResult([]); setToggle(false) }}>
          <ListItemText primary={data[index].title} />
        </Link>
      </ListItem >
    );
  }
  return (
    <div className={classes.root} style={{ justifyContent: 'flex-end' }} ref={searchBar}>
      <div className={classes.root} style={{ flex: !toggle ? 0 : 1, background: 'transparent' }} >
        {toggle &&
          <>
            <InputBase
              className={classes.textField}
              placeholder="Search blog"
              onChange={handleChange}
              value={value}
            />
            <Divider className={classes.divider} orientation="vertical" />
          </>
        }
        <IconButton className={classes.iconButton} aria-label="search" onClick={() => setToggle(!toggle)}>
          <SearchIcon />
        </IconButton>
        {value.length >= 4 && searchResult.length > 0 && <Paper className={classes.searchResultHolder}><FixedSizeList height={200} width={'100%'} itemSize={35} itemCount={searchResult.length} itemData={searchResult}>
          {renderRow}
        </FixedSizeList></Paper>
        }
      </div>
    </div>
  )
}
export default Search;