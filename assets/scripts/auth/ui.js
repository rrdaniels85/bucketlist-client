'use strict'
const store = require('../store.js')
const goalapi = require('../goals/api.js')
const goalui = require('../goals/ui.js')
const goalevents = require('../goals/events.js')

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
  goalapi.getGoals()
    .then(goalui.getGoalsSuccess)
    .catch(goalui.getGoalsFailure)
}

const signInFailure = (error) => {
  console.error(error)
}

const signOutSuccess = () => {
  store.user = null
  console.log(store)
  $('#content').empty()
  // $('body').removeClass('modal-open')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
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
