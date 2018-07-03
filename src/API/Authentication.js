
import React from "react";
import { baseUrl, confirmSuccessUrl } from "API/config";
import axios from "axios";

const login = (email, password) => {
  return axios.post(baseUrl + "auth/sign_in",{email, password})
    .then(updateCrentials)
}

const logOut = () => {
  const {uid, accessToken, client} = getCredentials()
  return axios.delete(baseUrl + "auth/sign_out", { headers: {
    "access-token":accessToken,
    "client":client,
    "uid":uid,
  }
  })
  .then(destroyCredentials)
}

const register = (email, password, passwordConfirmation) => {
  console.log(email, password, passwordConfirmation)
  return axios.post(baseUrl + "auth/", {
    email,
    password,
    "password_confirmation": passwordConfirmation,
    "confirm_success_url" : confirmSuccessUrl,
  })
}


function updateCrentials(response){
  const {"access-token": accessToken , client, uid } = response.headers
  localStorage.setItem('accessCredentials', JSON.stringify({accessToken,client, uid}))
  return response
}

function destroyCredentials(response) {
  localStorage.setItem('accessCredentials', null)
  return response
}

function getCredentials() {
  const credentials = localStorage.getItem('accessCredentials')
  if(credentials){
    return JSON.parse(credentials)
  }
  return null
}

function isLoggedIn(){
  const credentials = getCredentials()
  if (credentials){
    return true
  }
  return false
}

export {login, getCredentials, isLoggedIn, logOut, register }
