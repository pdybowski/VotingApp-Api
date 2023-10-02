const express = require('express')
const router = express.Router()
const votersController = require('../controllers/votersController')

router.get('/', (req, res, next) => {
  votersController.getVoters(req, res, next)
})

router.post('/', (req, res, next) => {
  votersController.addVoter(req, res, next)
})

module.exports = router
