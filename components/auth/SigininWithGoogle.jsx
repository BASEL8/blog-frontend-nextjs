import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GOOGLE_CLINT_ID } from '../../config'
import { signinWithGoogle, authenticate } from '../../actions/auth'
import Router from 'next/router'
const SigninWithGoogle = () => {
  const [values, setValues] = useState({ error: '' })
  const responseGoogle = (res) => {
    const tokenId = res.tokenId;
    const user = { tokenId }
    signinWithGoogle(user).then(res => {
      if (res.error) {
        setValues({ ...values, error: res.error, loading: false })
      } else {
        authenticate(res, () => Router.push("/"))
      }
    })
  }
  return (
    <GoogleLogin
      clientId={GOOGLE_CLINT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}

    />
  )
}
export default SigninWithGoogle;