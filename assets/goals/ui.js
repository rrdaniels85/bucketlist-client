'use strict'
const store = require('../scripts/store.js')

const createGoalSuccess = (data) => {
  console.log('you successfully created a goal')
}

const createGoalFailure = (error) => {
  console.error(error)
}

module.exports = {
  createGoalSuccess,
  createGoalFailure
}
