const Voter = require('../models/voter')

exports.getVoters = async () => {
  const voters = await Voter.find();
  return voters;
}

exports.addVoter = async (newVoter) => {
  const voter = new Voter(newVoter);
  await voter.save();
  return voter;
}