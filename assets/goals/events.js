'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateGoal = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createGoal(data)
    .then(ui.createGoalSuccess)
    .catch(ui.createGoalFailure)
}

const goalHandlers = () => {
  $('#create-goal').on('submit', onCreateGoal)
}

module.exports = {
  goalHandlers
}
