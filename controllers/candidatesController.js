const candidatesService = require('../services/candidatesService');

exports.getCandidates = async (req, res, next) => {
  try {
    const candidates = await candidatesService.getCandidates();
    return res.status(200).send(candidates);
  } catch (error) {
    next(error)
  }
}

exports.addCandidate = async (req, res, next) => {
  try {
    const candidate = await candidatesService.addCandidate(req.body);
    return res.status(200).send(candidate);
  } catch (error) {
    next(error)
  }
}