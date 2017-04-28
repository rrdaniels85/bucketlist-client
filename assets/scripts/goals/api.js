'use strict'

const config = require('../config')
const store = require('../store')

const createGoal = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/goals',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getGoals = () => {
  return $.ajax({
    url: config.apiOrigin + '/goals',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteGoal = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/goals/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGoal = (goalId, data) => {
  return $.ajax({
    url: config.apiOrigin + '/goals/' + goalId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createGoal,
  getGoals,
  deleteGoal,
  updateGoal
}
