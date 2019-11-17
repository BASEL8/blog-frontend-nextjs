
import React, { useEffect, useState } from 'react'
import { getCookie } from '../../../actions/auth'
import { getCategories } from '../../../actions/category'
import { getTags } from '../../../actions/tag'
import { userUpdateBlog, singleBlog } from '../../../actions/blog'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import { useParams, useHistory } from 'react-router-dom'
import Router,{withRouter} from 'next/router'
import Chip from '@material-ui/core/Chip';
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import '../../../node_modules/react-quill/dist/quill.snow.css'


const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  textField: {
    marginBottom: 0
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


const UpdateBlog_ = ({router}) => {
  const classes = useStyles();
  const [values, setValues] = useState({ title: '', error: false, success: false, formData: '', photo: '' })
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]); // categories
  const [checkedTag, setCheckedTags] = useState([]); // tags
  const { error, success, formData, photo, title } = values
  const [blog, setBlog] = useState({})
  const { query } = router;
  const {slug } = query;
  console.log(router.query.slug)

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
  //update section
  const arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };


   useEffect(() => {
       setValues({...values,formData : new FormData()})
   slug && singleBlog(token, slug).then(data => {
    
      if (data.error) {
        console.log(data.error)
      } else {
        setValues({ ...values, title: data.title, photo: photo ? 'data:image/jpeg;base64,' + arrayBufferToBase64(data.photo.data.data) : '' })
        initCategories();
        initTags();
        setBlog(data)
        setBody(data.body)
        formData.set('body', data.body)
        setCheckedCategories(data.categories.map((ca, i) => ca._id))
        setCheckedTags(data.tags.map((ta, i) => ta._id))
      }
    })
   }, [slug])
  const handleChange = (e) => {
    const value = e.target.name === 'photo' ? e.target.files[0] : e.target.value
    formData.set(e.target.name, value)
    setValues({ ...values, [e.target.name]: value, formData, error: '' })
  }
  const handleBody = (e) => {
    setBody(e);
    formData.set('body', e);
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
    userUpdateBlog(token, slug, formData)
      .then(data => {
        if (data.error) {
          console.log(data.error)
          setValues({ ...values, error: data.error });
        } else {
          Router.push(`/blogs/${slug}`)
        }
      });
  }
  const createBlogForm = () => {
    return (
      <>
        <form className={classes.container} onSubmit={publishBlog} >
          <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Title"
            margin="normal"
            name="title"
            variant="outlined"
            value={title}
            onChange={handleChange}
          />
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
          <div style={{ flex: 1 }}>
            <ReactQuill modules={UpdateBlog_.modules} formats={UpdateBlog_.formats} value={body} placeholder="type something amazing" onChange={handleBody} />
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
      categories.map((c, i) => {
        return (
          <FormControlLabel key={i} control={
            <Checkbox
              onChange={handleToggle(c._id)}
              checked={checkedCategories.indexOf(c._id) !== -1}
            />}
            label={c.name}
          />
        )
      })
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
      <Grid item xs={8} style={{ flex: 1 }}>
        <Paper className={classes.paper} style={{ marginBottom: 10 }}>Write</Paper>
        <Paper className={classes.paper} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
          <div>
            {showError()}
            {showSuccess()}
          </div>
          {createBlogForm()}
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <div>
            <h5>Categories</h5>
            <div style={{ display: 'flex', flexDirection: 'column' }}>{showCategories()}</div>
          </div>
          <div>
            <h5>Tags</h5>
            <div style={{ display: 'flex', flexDirection: 'column' }}>{showTags()}</div>
          </div>
        </Paper>
      </Grid>
    </Grid>

  )
}
UpdateBlog_.modules = {
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
UpdateBlog_.formats = [
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

export default withRouter(UpdateBlog_);