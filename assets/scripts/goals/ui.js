'use strict'
const store = require('../store.js')
const showGoalsTemplate = require('../templates/goal-listing.handlebars')

const createGoalSuccess = (data) => {
  console.log('you successfully created a goal')
}

const createGoalFailure = (error) => {
  console.error(error)
}

const getGoalsSuccess = (data) => {
  console.log(data)
  let showGoalsHtml = showGoalsTemplate({ goals: data.goals })
  $('.listing-goals').append(showGoalsHtml)
}

const getGoalsFailure = (error) => {
  console.error(error)
}

const deleteGoalSuccess = (data) => {
  console.log(data)
  $('#removegoalmodal' + data).modal('toggle')
  $('.listing-goals').empty()
  // $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('you successfully deleted that goal')
}

const reRenderPage = (data) => {
  console.log(data)
  $('.listing-goals').empty()
}

const deleteGoalFailure = (error) => {
  console.error(error)
}

const updateGoalSuccess = (data) => {
  console.log(data)
  $('#updategoalmodal' + data).modal('toggle')
  console.log('you successfully updated that goal')
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
  updateGoalFailure,
  reRenderPage
}
