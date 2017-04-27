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

module.exports = {
  createGoal
}
