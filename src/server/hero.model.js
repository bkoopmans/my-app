const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const heroSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: String,
    saying: String
  },
  {
    collection: 'Heroes'
  }
);

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;