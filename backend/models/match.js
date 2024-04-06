// import mongoose module
const mongoose = require("mongoose");
// create match schema (representation des attributs)
const matchSchema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String
});
// Affect matchSchema to Match Model
const match = mongoose.model("Match", matchSchema);
// make match model exportable
module.exports = match;