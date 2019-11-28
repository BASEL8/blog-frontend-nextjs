import React, { useEffect, useState } from 'react'
import { getCookie } from '../../actions/auth'
import { getCategories } from '../../actions/category'
import { getTags } from '../../actions/tag'
import { createBlog, searchList } from '../../actions/blog'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import  Link  from '../../src/Link'
import Chip from '@material-ui/core/Chip';
import Countable from 'countable'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import '../../node_modules/react-quill/dist/quill.snow.css'

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  textInputHolder: {
    display: 'flex',
    position: 'relative',
  },
  textField: {
    marginBottom: 0,
    flex: 1,
  },
  searchResultHolder: {
    width: '100%',
    minHeight: 100,
    background: 'yellow',
    position: 'absolute',
    top: '100%',
    zIndex: 99
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 0
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));
const CreateBlog = () => {
  const classes = useStyles();
  const [values, setValues] = useState({ title: 'test', error: false, success: false, formData: '', photo: '', timeToRead: 0 })
  const [searchResult, setSearchResult] = useState([])
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]); // categories
  const [checkedTag, setCheckedTags] = useState([]); // tags
  const { error, success, formData, photo, title, timeToRead } = values
  const token = getCookie('token');
  const blogFromLocalStorage = () => {
    if (typeof window === 'undefined') {
      return false
    } else {
      if (localStorage.getItem('blog')) {
        return JSON.parse(localStorage.getItem('blog'))
      } else {
        return false
      }
    }
  }
  const [body, setBody] = useState(blogFromLocalStorage())
  const initCategories = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };
  const initTags = () => {
    getTags().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setTags(data);
      }
    });
  };
  useEffect(() => {
    setValues({ ...values, formData: new FormData() })
    initCategories();
    initTags();
  }, [])
  const handleChange = (e) => {
    const value = e.target.name === 'photo' ? e.target.files[0] : e.target.value
    formData.set(e.target.name, value)

    setValues({ ...values, [e.target.name]: value, formData, error: '' })
    e.target.name !== 'photo' && value.length % 4 === 0 && searchList({ value }).then(res => setSearchResult(res))
  }
  const handleBody = (e) => {
    setBody(e);
    Countable.count(e, (x) => {
      let seconds = x.all / 360 * 6;
      let minutes = Math.ceil(seconds / 40);
      formData.set('body', e);
      formData.set('timeToRead', minutes)
      setValues({ ...values, timeToRead: minutes })
    })

    if (typeof window !== 'undefined') {
      localStorage.setItem('blog', JSON.stringify(e))
    }
  }
  const handleToggle = c => () => {
    setValues({ ...values, error: '' });
    // return the first index or -1
    const clickedCategory = checkedCategories.indexOf(c);
    const all = [...checkedCategories];

    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    setCheckedCategories(all);
    formData.set('categories', all);
  };
  const handleTagsToggle = t => () => {
    setValues({ ...values, error: '' });
    // return the first index or -1
    const clickedTag = checkedTag.indexOf(t);
    const all = [...checkedTag];

    if (clickedTag === -1) {
      all.push(t);
    } else {
      all.splice(clickedTag, 1);
    }
    setCheckedTags(all);
    formData.set('tags', all);
  };
  const publishBlog = (e) => {
    e.preventDefault()
    createBlog(formData, token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, title: '', error: '', photo: '', success: `A new blog titled "${data.title}" is created` });
        setBody('');
        setCheckedCategories([]);
        setCheckedTags([]);
      }
    });
  }
  const createBlogForm = () => {
    return (
      <>
        <form className={classes.container} onSubmit={publishBlog} >
          <div className={classes.textInputHolder}>
            <TextField
              id="outlined-basic"
              className={classes.textField}
              label="Title"
              margin="normal"
              name="title"
              variant="outlined"
              onChange={handleChange}
              autoComplete='off'
              value={title}
            />
            
          </div>
          {title && searchResult.length > 0 && <Paper style={{marginTop:10,paddingBottom:10,border:'1px solid #D6D9DC'}}>
            <div style={{width:'100%',background:'#FAFAFB',padding:10,borderBottom:'1px solid #D6D9DC'}}>Similar questions</div>
              {searchResult.map((result, i) => <div key={i}> <Link href={`/blogs/${result.slug}`}>{result.title}</Link> </div>)}
            </Paper>}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <input
              accept="image/*"
              className={classes.input}
              style={{ display: 'none' }}
              id="contained-button-file"
              onChange={handleChange}
              multiple
              type="file"
              name="photo"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span" className={classes.button}> Upload Image</Button>
            </label>
            {photo.name ? <Chip label={photo.name} onDelete={() => setValues({ ...values, photo: '' })} color="primary" /> : <small className="text-muted m-3">Max size: 1mb</small>}

          </div>
          <div>time to read : {timeToRead}</div>
          <div style={{ flex: 1 }}>
            <ReactQuill modules={CreateBlog.modules} formats={CreateBlog.formats} value={body} placeholder="type something amazing" onChange={handleBody} />
          </div>
          <div>
            <h5>Categories</h5>
            <div style={{ display: 'flex', flexDirection: 'column' }}>{showCategories()}</div>
          </div>
          <div>
            <h5>Tags</h5>
            <div style={{ display: 'flex', flexDirection: 'column' }}>{showTags()}</div>
          </div>
          <div>
            <Button variant="contained" className={classes.button} type="submit">Publish</Button>
          </div>
        </form>
      </>
    )
  }
  const showCategories = () => {
    return (
      categories &&
      categories.map((c, i) => (
        <FormControlLabel key={i} control={
          <Checkbox
            onChange={handleToggle(c._id)}
            checked={checkedCategories.indexOf(c._id) !== -1}
            inputProps={{
              'aria-label': 'primary checkbox',
            }}

          />}
          label={c.name}
        />
      ))
    );
  };

  const showTags = () => {
    return (
      tags &&
      tags.map((t, i) => (
        <FormControlLabel key={i} control={
          <Checkbox
            onChange={handleTagsToggle(t._id)}
            checked={checkedTag.indexOf(t._id) !== -1}
            inputProps={{
              'aria-label': 'primary checkbox',
            }}

          />}
          label={t.name}
        />
      ))
    );
  };
  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
      {success}
    </div>
  );


  return (
    <Grid container spacing={3} alignItems="stretch" style={{ flex: 1, display: 'flex' }}>
      <Grid item sm={12} md={8} style={{ flex: 1, flexWrap: 'wrap' }}>
        <Paper className={classes.paper} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
          <div>
            {showError()}
            {showSuccess()}
          </div>
          {createBlogForm()}
        </Paper>
      </Grid>
    </Grid>

  )
}
CreateBlog.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote',],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block'],
    ['background']
  ]
}
CreateBlog.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block',
  'background'
]

export default CreateBlog;