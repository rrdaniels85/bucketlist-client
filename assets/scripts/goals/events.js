'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateGoal = function (event) {
  event.preventDefault()
  console.log('create goals was clicked!')
  const data = getFormFields(this)
  console.log(data)
  api.createGoal(data)
    .then(ui.createGoalSuccess)
    .catch(ui.createGoalFailure)
}

const onGetGoals = function (event) {
  event.preventDefault()
  console.log('get goals was clicked!')
  api.getGoals()
    .then(ui.getGoalsSuccess)
    .catch(ui.getGoalsFailure)
}

const goalHandlers = () => {
  $('#create-goal').on('submit', onCreateGoal)
  $('.get-goals').on('click', onGetGoals)
}

module.exports = {
  goalHandlers,
  onCreateGoal,
  onGetGoals
}
