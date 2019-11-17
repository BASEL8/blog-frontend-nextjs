import fetch from 'isomorphic-fetch'
import { API } from '../config'
import { handleResponse } from './auth'

export const getData = (token) => {
  console.log(`${API}/admin/data`)
  return fetch(`${API}/admin/data`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const getBlogsDateData = (token, month_, year_) => {
  return fetch(`${API}/admin/data/blogs/${month_}/${year_}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const getTagsData = (token, month_, year_) => {
  return fetch(`${API}/admin/data/tags/${month_}/${year_}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const getCategoriesData = (token, month_, year_) => {
  return fetch(`${API}/admin/data/categories/${month_}/${year_}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}