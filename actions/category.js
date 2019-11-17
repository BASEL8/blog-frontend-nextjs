import fetch from 'isomorphic-fetch'
import { handleResponse } from './auth'
import { API } from '../config'

export const createCategory = (category, token) => {
  return fetch(`${API}/category`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: 'GET',
  })
    .then(res => res.json()).catch(error => error)
}
export const getCategory = (slug) => {
  return fetch(`${API}/category/${slug}`, {
    method: 'GET',
  }).then(res => res.json()).catch(error => error)
}
export const removeCategory = (slug, token, user) => {
  return fetch(`${API}/category/${slug}`, {
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