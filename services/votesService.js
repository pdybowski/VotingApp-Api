const Voter = require('../models/voter')
const Candidate = require('../models/candidate')

exports.addVote = async ({ voterId, candidateId }) => {
  const voter = await Voter.findById(voterId);
  if (!voter) throw new Error("Voter not found.");

  if (voter.hasVoted) throw new Error("Voter already voted.");

  const candidate = await Candidate.findById(candidateId);
  if (!candidate) throw new Error("Candidate not found.");

  voter.hasVoted = true;
  await voter.save();

  candidate.votes++;
  await candidate.save();
}