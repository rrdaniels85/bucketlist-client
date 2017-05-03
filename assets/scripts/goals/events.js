'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateGoal = function (event) {
  // prevent screen from refreshing
  event.preventDefault()
  // assign form field inputs to variable data
  const data = getFormFields(this)
  // check that form field entries are valid
  if (checkForBlanks(data)) {
    // if invalid, notify user and do not send request to API
    $('.createerror').text('An error occurred. You must fill in all fields in order to create a new item.')
  } else {
    // submit post request to API
    api.createGoal(data)
    .done(ui.createGoalSuccess, getGoals)
    .catch(ui.createGoalFailure)
  }
}

const checkForBlanks = function (data) {
  // check to see if user entered valid values in form fields
  if ((data.goal.status === '') || (data.goal.description === '') || (data.goal.category === '')) {
    // if not valid - return true
    return true
  } else {
    // if valid - return false
    return false
  }
}

const onGetGoals = function (event) {
  // prevent screen from refreshing
  event.preventDefault()
  // submit request to api to index goals
  api.getGoals()
    .then(ui.getGoalsSuccess)
    .catch(ui.getGoalsFailure)
}

const onDeleteGoal = function () {
  // prevent screen from refreshing
  event.preventDefault()
  // assign data value to be equal to the data-id of the item user wants to remove
  let data = $(this).attr('data-id')
  // pass data in delete request to api to delete item associated with ID
  api.deleteGoal(data)
    .done(ui.deleteGoalSuccess, getGoals)
    .catch(ui.deleteGoalFailure)
}

const getGoals = function () {
  // send request to API to get goals without an event trigger
  api.getGoals()
    .then(ui.getGoalsSuccess)
    .catch(ui.getGoalsFailure)
}

const onUpdateGoal = function (event) {
  // prevent screen from refreshing
  event.preventDefault()
  // assign data to be what user entered in form fields
  const data = getFormFields(this)
  // check for valid data entries in form fields
  if (checkForBlanks(data)) {
    // if invalid - notify user and do not send to API
    $('.updateerror').text('An error occurred. You must fill in all fields in order to update an item.')
  } else {
    // if valid - assign data-id of item to the variable goalId
    let goalId = $(this).attr('data-id')
    // pass goalID to the API Patch request for item
    api.updateGoal(goalId, data)
      .done(ui.updateGoalSuccess, getGoals)
      .catch(ui.updateGoalFailure)
  }
}

const goalHandlers = () => {
  $('#create-goal').on('submit', onCreateGoal)
  $('.get-goals').on('click', onGetGoals)
  $(document).on('submit', '.remove-goal', onDeleteGoal)
  $(document).on('submit', '.update-goal', onUpdateGoal)
}

module.exports = {
  goalHandlers,
  onCreateGoal,
  onGetGoals,
  onDeleteGoal,
  onUpdateGoal,
  getGoals
}
