import fetch from 'isomorphic-fetch'
import { API } from '../config'

export const contactFrom = (data) => {
  return fetch(`${API}/contact`
    , {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  ).then(res => res.json()).catch(err => console.log(err))
}
export const contactBlogAuthorForm = (data) => {

  return fetch(`${API}/contact-blog-author`
    , {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  ).then(res => res.json()).catch(err => console.log(err))
}