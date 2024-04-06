// import mongoose module
const mongoose = require("mongoose");
// create player schema (representation des attributs)
const playerSchema = mongoose.Schema({
    age: Number,
    nbr: Number,
    position: String,
    name: String,
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    }
});
// Affect playerSchema to Match Model
const player = mongoose.model("Player", playerSchema);
// make player model exportable
module.exports = player;