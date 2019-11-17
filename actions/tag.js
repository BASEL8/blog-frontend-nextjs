import fetch from 'isomorphic-fetch'
import { handleResponse } from './auth'
import { API } from '../config'


export const createTag = (tag, token) => {
  return fetch(`${API}/tag`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(tag)
  })
    .then(res => {
      handleResponse(res)
      return res.json()
    }).catch(error => error)
}
export const getTags = () => {
  return fetch(`${API}/tags`, {
    method: 'GET',
  }).then(res => res.json()).catch(error => error)
}
export const getTag = (slug) => {
  return fetch(`${API}/tag/${slug}`, {
    method: 'GET',
  }).then(res => res.json()).catch(error => error)
}
export const removeTag = (slug, token, user) => {
  return fetch(`${API}/tag/${slug}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(user)
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}