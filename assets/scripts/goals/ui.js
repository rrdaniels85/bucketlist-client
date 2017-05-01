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
    $('.nogoals').text('You currently have no goals documented. Click the button to create some new goals!')
    console.log('create some goals please')
  } else {
    $('.nogoals').empty()
    data.goals.sort(function (a, b) {
      return parseFloat(b.id) - parseFloat(a.id)
    })
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
