'use strict'
const store = require('../store.js')
const showGoalsTemplate = require('../templates/goal-listing.handlebars')
const api = require('./api.js')

const createGoalSuccess = (data) => {
  $('#addgoalmodal').modal('toggle')
  console.log('you successfully created a goal')
  $('#content').empty()
  // $('body').removeClass('modal-open')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const createGoalFailure = (error) => {
  console.error(error)
}

const getGoalsSuccess = (data) => {
  console.log(data)
  if (data.goals.length === 0) {
    // if user has not yet created any goals, display below message
    $('.nogoals').text('You currently have no bucket list items documented. Click the button to create some list items!')
    console.log('create some goals please')
  } else {
    // clear any goals that were there before
    $('.nogoals').empty()
    // take data with goals and sort numerically in descending order
    data.goals.sort(function (a, b) {
      return parseFloat(b.id) - parseFloat(a.id)
    })
    // pass the data.goals to handlebars template and re-render the goals on the screen
    let showGoalsHtml = showGoalsTemplate({ goals: data.goals })
    $('#content').append(showGoalsHtml)
  }
}

const getGoalsFailure = (error) => {
  console.error(error)
}

const deleteGoalSuccess = (data) => {
  console.log(data)
  $('#removegoalmodal' + data).modal('toggle')
  $('#content').empty()
  // $('body').removeClass('modal-open')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('you successfully deleted that goal')
}

const deleteGoalFailure = (error) => {
  console.error(error)
}

const updateGoalSuccess = (data) => {
  console.log(data)
  $('#updategoalmodal' + data).modal('toggle')
  console.log('you successfully updated that goal')
  $('#content').empty()
  // $('body').removeClass('modal-open')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const updateGoalFailure = (error) => {
  console.error(error)
}

module.exports = {
  createGoalSuccess,
  createGoalFailure,
  getGoalsSuccess,
  getGoalsFailure,
  deleteGoalSuccess,
  deleteGoalFailure,
  updateGoalSuccess,
  updateGoalFailure
}
