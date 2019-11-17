import fetch from 'isomorphic-fetch'
import cookie from 'js-cookie'
import { API } from '../config'
import Router from 'next/router'
export const handleResponse = (res) => {
  if (res.status === 401) {
    removeCookie('token');
    removeLocalStorage('user');
    Router.push('/')
  }
}
export const preSignup = (user) => {
  return fetch(`${API}/pre-signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json()).catch(error => error)
}
export const signup = (activationToken) => {
  return fetch(`${API}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ activationToken })
  }).then(res => res.json()).catch(error => error)
}
export const login = (user) => {
  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json()).catch(error => error)
}
export const forgetPassword = (email) => {
  return fetch(`${API}/forget-password`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
  }).then(res => res.json()).catch(error => error)
}
export const resetPassword = (resetPasswordLink, newPassword) => {
  return fetch(`${API}/reset-password`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ resetPasswordLink, newPassword })
  }).then(res => res.json()).catch(error => error)
}
export const signout = (next) => {
  removeCookie('token');
  removeLocalStorage('user');
  next();
  return fetch(`${API}/signout`, { method: 'GET' }).then(res => res).catch(error => console.log(error))
}
export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, { expires: 1 })
  }
}
export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key)
  }
}
export const getCookie = (key) => {
  if (process.browser) {
    return cookie.get(key)
  }
}
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key)
  }
}
export const authenticate = (data, next) => {
  setCookie('token', data.token)
  setLocalStorage('user', data.user)
  next();
}
export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie('token')
    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
      }
      return false
    }
  }
}
export const updateUser = (user, next) => {
  if (process.browser) {
    if (localStorage.getItem('user')) {
      let auth = JSON.parse(localStorage.getItem('user'))
      auth = user;
      localStorage.setItem('user', JSON.stringify(auth))
      next();
    }
  }
}

export const signinWithGoogle = (user) => {
  return fetch(`${API}/google-signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json()).catch(error => error)
}

export const delateMyAccount = (token, user) => {

  return fetch(`${API}/delete-my-account`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(user)
  }).then(res => res.json()).catch(error => error)
}
export const adminRemoveUser = (token, userId) => {
  console.log(userId)
  return fetch(`${API}/remove-user/${userId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json()).catch(error => error)
}