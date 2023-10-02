const votersService = require('../services/votersService');

exports.getVoters = async (req, res, next) => {
  try {
    const voters = await votersService.getVoters();
    return res.status(200).send(voters);
  } catch (error) {
    next(error)
  }
}

exports.addVoter = async (req, res, next) => {
  try {
    const voter = await votersService.addVoter(req.body);
    return res.status(200).send(voter);
  } catch (error) {
    next(error)
  }
}