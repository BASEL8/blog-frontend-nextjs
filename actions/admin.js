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
export const getBlogsData = (token) => {
  return fetch(`${API}/admin/data/blogs`, {
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