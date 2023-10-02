const express = require('express')

const bodyParser = require('body-parser')

const voters = require('../routes/voters')
const candidates = require('../routes/candidates')
const votes = require('../routes/votes')

module.exports = function (app) {
  app.use(express.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token'
    )
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE')
      return res.status(200).json({})
    }
    next()
  })

  app.use('/api/voters', voters)
  app.use('/api/candidates', candidates)
  app.use('/api/votes', votes)

  app.use('*', (req, res, next) => {
    next(new NotFoundError('Route is not supported.'), req, res, next)
  })
}
