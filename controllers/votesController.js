const votesService = require('../services/votesService');

exports.addVote = async (req, res, next) => {
  try {
    const voters = await votesService.addVote(req.params);
    return res.status(200).send(voters);
  } catch (error) {
    next(error)
  }
}