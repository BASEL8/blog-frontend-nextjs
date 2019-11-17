import fetch from 'isomorphic-fetch'
import queryString from 'query-string'
import { handleResponse } from './auth'
import { API } from '../config'

export const createBlog = (blog, token) => {
  return fetch(`${API}/blog`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: blog
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const listBlogWithCategoriesTags = (token, skip, limit) => {

  return fetch(`${API}/blogs-categories-tags`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ limit, skip })
    }
  ).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}

export const singleBlog = (token, slug) => {
  return fetch(`${API}/blog/${slug}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      handleResponse(res)
      return res.json()
    }).catch(error => error)
}
export const singleBlogPart = (slug) => {
  return fetch(`${API}/blog/part/${slug}`, {
    method: 'POST'
  })
    .then(res => res.json()).catch(error => error)
}

export const listRelated = (_id, categories) => {
  return fetch(`${API}/blogs/related`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(_id, categories)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
export const adminList = (token, user) => {
  return fetch(`${API}/blogs`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  ).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}

export const userList = (token, user) => {
  return fetch(`${API}/user/blogs`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(user)
    }
  ).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}

export const adminRemovePlog = (token, user, slug) => {
  return fetch(`${API}/blog/adminRemoveBlog/${slug}`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(user)
    }
  ).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const userRemovePlog = (token, user, slug) => {
  return fetch(`${API}/blog/userRemoveBlog/${slug}`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(user)
    }
  ).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}

export const userUpdateBlog = (token, slug, blog) => {
  console.log(token)
  return fetch(`${API}/blog/${slug}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: blog
    }
  ).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const searchList = (params) => {
  const query = queryString.stringify(params)
  return fetch(`${API}/blogs/search?${query}`,
    {
      method: 'GET',
    }
  ).then(res => res.json()).catch(error => error)
}
