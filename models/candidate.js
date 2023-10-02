const mongoose = require('mongoose')

const candidateSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    votes: {
      type: Number,
      default: 0
    },
  },
  { timestamps: true }
)

// clean data
candidateSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v;

  obj.id = obj._id;
  delete obj._id;

  return obj;
}

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
