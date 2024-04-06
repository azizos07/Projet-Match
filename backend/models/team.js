// import mongoose module
const mongoose = require("mongoose");
// create team schema (representation des attributs)
const teamSchema = mongoose.Schema({
    foundation: Number,
    name: String,
    owner: String,
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    }],
});
// Affect teamSchema to Match Model
const team = mongoose.model("Team", teamSchema);
// make team model exportable
module.exports = team;