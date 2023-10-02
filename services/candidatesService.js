const Candidate = require('../models/candidate')

exports.getCandidates = async () => {
  const candidates = await Candidate.find();
  return candidates;
}

exports.addCandidate = async (newCandidate) => {
  const candidate = new Candidate(newCandidate);

  await candidate.save()

  return candidate;
}