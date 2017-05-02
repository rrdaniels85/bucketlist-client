'use strict'
const store = require('../store.js')
const goalapi = require('../goals/api.js')
const goalui = require('../goals/ui.js')
const goalevents = require('../goals/events.js')

const signUpSuccess = (data) => {
  // assign user data in the store
  store.user = data.user
  $('#signupmodal').modal('toggle')
  $('#signinmodal').modal('toggle')
  $('.signupsuccess').text('You successfully signed up! Please sign in to continue.')
}

const signUpFailure = () => {
  $('.signuperror').text('An error occurred. You may have entered invalid credentials. Try again.')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.sign-in-view').addClass('hidden')
  $('.afterlogin').removeClass('hidden')
  $('#signinmodal').modal('toggle')
  goalapi.getGoals()
    .then(goalui.getGoalsSuccess)
    .catch(goalui.getGoalsFailure)
}

const signInFailure = () => {
  $('.signinerror').text('An error occurred. You may have entered invalid credentials. Try again.')
}

const signOutSuccess = () => {
  store.user = null
  $('#signoutmodal').modal('toggle')
  $('#content').empty()
  $('.nogoals').text('')
  // $('body').removeClass('modal-open')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('.sign-in-view').removeClass('hidden')
  $('.afterlogin').addClass('hidden')
}

const signOutFailure = () => {
}

const changePasswordSuccess = () => {
  $('#newpasswordmodal').modal('toggle')
  $('.passworderror').text('')
}

const changePasswordFailure = () => {
  $('.passworderror').text('An error occurred. You may have entered the wrong password. Try again.')
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
