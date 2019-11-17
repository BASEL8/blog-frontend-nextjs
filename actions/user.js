import fetch from 'isomorphic-fetch'
import { handleResponse } from './auth'
import { API } from '../config'

export const getUserProfile = (token) => {
  return fetch(`${API}/profile`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}

export const getPublicProfile = (username) => {
  return fetch(`${API}/profile/${username}`, {
    method: 'GET',
  }).then(res => res.json()).catch(error => error)
}

export const updateProfile = (token, user) => {
  return fetch(`${API}/profile/update`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: user
  }).then(res => {
    handleResponse(res)
    return res.json()
  }).catch(error => error)
}
export const getProfilePhoto = (token, username) => {
  return fetch(`${API}/profile/photo/${username}`, {
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

export const getAllUsers = (token, admin) => {
  return fetch(`${API}/get-all-users`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: admin
  }).then(res => {
    handleResponse(res);
    return res.json()
  }).catch(error => error)
}