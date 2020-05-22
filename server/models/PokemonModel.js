const mongoose = require('mongoose');

const myURI =
  'mongodb+srv://rocky:ilovetesting@rlcluster-cy0q7.mongodb.net/test?retryWrites=true&w=majority';

const URI = process.env.MONGO_URI || myURI; // DB URI

// Create Message Schema
const MsgSchema = new mongoose.Schema({
  id: String,
  name: String,
  classification: String,
  types: Array,
  resistant: Array,
  weaknesses: Array,
  weight: Object,
  height: Object,
  fleeRate: Number,
  evolutionRequirements: Object,
  evolutions: Array,
  maxCP: Number,
  maxHP: Number,
  attacks: Object
});

// // use pre method to save the current time
// MsgSchema.pre('save', function(next) {
//   // get current date
//   let currDate = new Date();
//   this.created_at = currDate;
//   // check if created_at exist
//   if (!this.created_at) this.created_at = currDate;
//   next();
// });

const Pokemons = mongoose.model('Pokemons', MsgSchema);

module.exports = { URI, Pokemons }; // <-- export your model
