import React, { useState, useEffect } from 'react';
import { getCookie, isAuth } from '../../actions/auth'
import { getCategories, removeCategory, createCategory } from '../../actions/category'
import { getTags, removeTag, createTag } from '../../actions/tag'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Router from 'next/router'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  chip: {
    marginRight: 10
  },
  addHolder: {
    display: 'flex',
    marginTop: 15
  },
  input: {
    flex: 1,
    padding: 3,
    paddingLeft: 10
  },
}));

const CategoriesAndTags = () => {
  const classes = useStyles()
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')
  const [tags, setTags] = useState([])
  const [tag, setTag] = useState('')
  const token = getCookie('token');
  useEffect(() => {
    getCategories()
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          setCategories(data)
          getTags().then(data => {
            if (data.error) {
              console.log(data.error);
            } else {
              setTags(data)
            }
          })
        }
      })
  }, [])
  const deleteCategory = (slug) => {
    removeCategory(slug, token, isAuth())
      .then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          getCategories()
            .then(data => {
              if (data.error) {
                console.log(data.error)
              } else {
                setCategories(data)
              }
            })
        }
      })
  };
  const addCategory = () => {
    createCategory({ name: category }, token).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        getCategories()
          .then(data => {
            if (data.error) {
              console.log(data.error)
            } else {
              setCategories(data)
              setCategory('')
            }
          })
      }
    })
  }

  const showCategories = () => {
    return categories.map((c, i) => <Chip
      className={classes.chip}
      key={i}
      label={c.name}
      onDelete={() => deleteCategory(c.slug)}
      color="primary"
      onClick={()=>Router.push({pathname:'/categories/'+c.slug,state:{slug:c.slug}})}
    />
    )
  }
  const showAddCategories = () => {
    return (
      <Paper className={classes.addHolder} >
        <InputBase
          className={classes.input}
          placeholder="Add Category"
          inputProps={{ 'aria-label': 'add category' }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Divider orientation="vertical" />
        <IconButton color="primary" aria-label="directions" onClick={addCategory}>
          <AddCircleIcon />
        </IconButton>
      </Paper>
    )
  }


  const addTag = () => {
    createTag({ name: tag }, token).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        getTags()
          .then(data => {
            if (data.error) {
              console.log(data.error)
            } else {
              setTags(data)
              setTag('')
            }
          })
      }
    })
  }
  const deleteTag = (slug) => {
    removeTag(slug, token, isAuth())
      .then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          getTags()
            .then(data => {
              if (data.error) {
                console.log(data.error)
              } else {
                setTags(data)
              }
            })
        }
      })

  };
  const showTags = () => {
    return tags.map((t, i) => <Chip
      className={classes.chip}
      key={i}
      label={t.name}
      onDelete={() => deleteTag(t.slug)}
      color="primary"
      onClick={() => Router.push({ pathname: '/tags/' + t.slug, state: { slug: t.slug } })}
  />
    )
  }
  const showAddTags = () => {
    return (
      <Paper className={classes.addHolder} >
        <InputBase
          className={classes.input}
          placeholder="Add Tag"
          inputProps={{ 'aria-label': 'add category' }}
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <Divider orientation="vertical" />
        <IconButton color="primary" aria-label="directions" onClick={addTag}>
          <AddCircleIcon />
        </IconButton>
      </Paper>
    )
  }






  return (
    <div>
      <div>
        <Box boxShadow={1} p={2} mb={5}>
          <Typography variant="h3" component="h2" gutterBottom>
            Categories
          </Typography>
          <div>
            {showCategories()}
            {showAddCategories()}
          </div>
        </Box>
        <Box boxShadow={1} p={2} mb={5}>
          <Typography variant="h3" component="h2" gutterBottom>
            Tags
          </Typography>
          <div>
            {showTags()}
            {showAddTags()}
          </div>
        </Box>
      </div>
    </div>
  )

}
export default CategoriesAndTags;