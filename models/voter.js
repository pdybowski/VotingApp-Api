const mongoose = require('mongoose')

const voterSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    hasVoted: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
)

// clean data
voterSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v;

  obj.id = obj._id;
  delete obj._id;

  return obj;
}

const Voter = mongoose.model('Voter', voterSchema);

module.exports = Voter;
