'use strict'
const store = require('../scripts/store.js')

const signUpSuccess = (data) => {
  console.log('sign up success ran')
  store.user = data.user
  console.log(store)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log(store)
}

const signInFailure = (error) => {
  console.error(error)
}

const signOutSuccess = () => {
  store.user = null
  console.log(store)
}

const signOutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const changePasswordFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
