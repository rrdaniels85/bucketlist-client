'use strict'
const store = require('../store.js')
const goalapi = require('../goals/api.js')
const goalui = require('../goals/ui.js')
const goalevents = require('../goals/events.js')

const signUpSuccess = (data) => {
  console.log('sign up success ran')
  store.user = data.user
  $('#signupmodal').modal('toggle')
  $('#signinmodal').modal('toggle')
  console.log(store)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log(store)
  $('.sign-in-view').addClass('hidden')
  $('.afterlogin').removeClass('hidden')
  $('#signinmodal').modal('toggle')
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
  $('#signoutmodal').modal('toggle')
  $('#content').empty()
  // $('body').removeClass('modal-open')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('.sign-in-view').removeClass('hidden')
  $('.afterlogin').addClass('hidden')
}

const signOutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
  $('#newpasswordmodal').modal('toggle')
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
