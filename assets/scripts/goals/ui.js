'use strict'
const store = require('../store.js')

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
