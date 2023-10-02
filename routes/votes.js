const express = require('express')
const router = express.Router()
const votesController = require('../controllers/votesController')

router.patch('/:voterId/:candidateId', (req, res, next) => {
  votesController.addVote(req, res, next)
})

module.exports = router;