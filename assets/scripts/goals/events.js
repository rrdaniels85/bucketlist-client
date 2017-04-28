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

const onDeleteGoal = function () {
  event.preventDefault()
  let data = $(this).parent().prev().attr('data-id')
  api.deleteGoal(data)
    .then(ui.deleteGoalSuccess)
    .catch(ui.deleteGoalFailure)
}

const onUpdateGoal = function (event) {
  event.preventDefault()
  console.log('this update button works')
  const data = getFormFields(this)
  console.log(this)
  let goalId = $(this).attr('data-id')
  console.log(goalId)
  api.updateGoal(goalId, data)
    .then(ui.updateGoalSuccess)
    .catch(ui.updateGoalFailure)
}

const goalHandlers = () => {
  $('#create-goal').on('submit', onCreateGoal)
  $('.get-goals').on('click', onGetGoals)
  $(document).on('click', '.remove', onDeleteGoal)
  $(document).on('submit', '.update-goal', onUpdateGoal)
}

module.exports = {
  goalHandlers,
  onCreateGoal,
  onGetGoals,
  onDeleteGoal,
  onUpdateGoal
}
