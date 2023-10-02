const express = require('express')
const router = express.Router()
const candidatesController = require('../controllers/candidatesController')

router.get('/', (req, res, next) => {
  candidatesController.getCandidates(req, res, next)
})

router.post('/', (req, res, next) => {
  candidatesController.addCandidate(req, res, next)
})

module.exports = router
