'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')
const goalEvents = require('./goals/events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
  goalEvents.goalHandlers()
})

$(() => {
  $('#passwordbutton').on('click', function () {
    $('.passworderror').text('')
    $('#change-password').find('input:text, input:password, input:password, select, textarea').val('')
  })
})

$(() => {
  $('.loginbuttons').on('click', function () {
    $('.signinerror').text('')
    $('.signuperror').text('')
    $('.passworderror').text('')
    $('#sign-in').find('input:text, input:password, input:password, select, textarea').val('')
    $('#sign-up').find('input:text, input:password, input:password, select, textarea').val('')
    $('#change-password').find('input:text, input:password, input:password, select, textarea').val('')
  })
})

$(() => {
  $('#addgoalbutton').on('click', function () {
    $('.createerror').text('')
    $('#create-goal').find('input:text, input:text, input:text, select, textarea').val('')
  })
})

$(() => {
  $(document).on('click', '.update', function () {
    $('.updateerror').text('')
  })
})
