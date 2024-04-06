// import express module
const express = require("express");
// import body parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sportMarsDB");
// import bcrypt module
const bcrypt = require("bcrypt");
// import json web token module
const jwt = require("jsonwebtoken");
// import express-session module
const session = require("express-session");
// import axios module
const axios = require("axios");
// import multer module
const multer = require("multer");
// import path module
const path = require("path");

// creates an express application (app)
const app = express();

// Body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

const secretKey = "croco2024-venus";
app.use(
    session({
        secret: secretKey,
    })
);

app.use(
    "/shortCutPath",
    express.static(path.join("backend/users/avatars/images"))
);
const MIME_TYPE = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    // "application/pdf": "pdf"
};
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        if (isValid) {
            cb(null, "backend/users/avatars/images");
        }
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(" ").join("-");
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
        cb(null, imgName);
    },
});

// Import Models
const Match = require("./models/match");
const User = require("./models/user");
const Player = require("./models/player");
const Team = require("./models/team");

// DB simulation
let matchesData = [{
        id: 1,
        teamOne: "CSS",
        teamTwo: "CA",
        scoreOne: "1",
        scoreTwo: "0",
        stadiumId: 2,
    },
    {
        id: 72,
        teamOne: "RMA",
        teamTwo: "FCB",
        scoreOne: "4",
        scoreTwo: "0",
        stadiumId: 1,
    },
    {
        id: 13,
        teamOne: "PSG",
        teamTwo: "OM",
        scoreOne: "0",
        scoreTwo: "0",
        stadiumId: 2,
    },
    {
        id: 47,
        teamOne: "OL",
        teamTwo: "BVB",
        scoreOne: "1",
        scoreTwo: "0",
        stadiumId: 3,
    },
];

let usersData = [{
        id: 1,
        fName: "ALi",
        lName: "Ben salah",
        email: "ali@gmail.com",
        pwd: "ali",
    },
    {
        id: 2,
        fName: "Med",
        lName: "Ben salah",
        email: "med@gmail.com",
        pwd: "med",
    },
    {
        id: 3,
        fName: "Salah",
        lName: "Ben salah",
        email: "salah@gmail.com",
        pwd: "salah",
    },
];

let stadiumsTab = [
    { id: 1, name: "rades", capacity: 60000, country: "Tunisia" },
    { id: 2, name: "campnew", capacity: 80000, country: "Spain" },
    { id: 3, name: "Sanciro", capacity: 70000, country: "Italy" },
];

let teamsData = [
    { id: 1, name: "real", owner: "raol", fondation: "1902" },
    { id: 2, name: "fcb", owner: "barce", fondation: "1910" },
    { id: 3, name: "est", owner: "espa", fondation: "1919" },
    { id: 4, name: "psg", owner: "amir", fondation: "1901" },
];
let playersData = [
    { id: 1, name: "messi", nbr: "10", age: "37", position: "atk", teamId: 2 },
    { id: 2, name: "ronaldo", nbr: "7", age: "36", position: "ac", teamId: 1 },
    { id: 3, name: "daraagi", nbr: "10", age: "24", position: "ac", teamId: 3 },
    { id: 4, name: "xavi", nbr: "6", age: "42", position: "mid", teamId: 2 },
];

// Business Logic (Traitement Logique des Reqs)
// BL : Get All Matches
app.get("/matches", (req, res) => {
    console.log("Here into BL : Get All Matches");
    Match.find().then((docs) => {
        res.json({ matches: docs });
    });
});
// BL : Get Match By ID
app.get("/matches/:id", (req, res) => {
    // traitement logique
    console.log("Here into BL : Get  Match By ID", req.params.id);
    let matchId = req.params.id;
    Match.findById(matchId).then((doc) => {
        res.json({ match: doc });
    });
});

// BL : Delete Match By ID
app.delete("/matches/:id", (req, res) => {
    // traitement logique
    console.log("Here into BL : Delete  Match By ID", req.params.id);
    let matchId = req.params.id;
    Match.deleteOne({ _id: matchId }).then((response) => {
        console.log("here response after delete one", response);
        if (response.deletedCount == 1) {
            res.json({ msg: "Done" });
        } else {
            res.json({ msg: "Error" });
        }
    });
});

// BL : Add Match
app.post("/matches", (req, res) => {
    // traitement logique
    console.log("Here into BL : Add Match", req.body);
    let matchObj = new Match(req.body);
    matchObj.save();
    res.json({ msg: "Added with success" });
});

// BL : Edit Match
app.put("/matches", (req, res) => {
    // traitement logique
    console.log("Here into BL : Edit Match", req.body);
    let matchId = req.body._id;
    Match.updateOne({ _id: matchId }, req.body).then((result) => {
        console.log("Here result", result);
        if (result.nModified == 1) {
            res.json({ msg: "Edited with success" });
        } else {
            res.json({ msg: "Error" });
        }
    });
});

// BL : Signup
app.post("/users/signup", multer({ storage: storageConfig }).single("img"), (req, res) => {
    User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
            bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
                req.body.pwd = cryptedPwd;
                req.body.avatar = `http://localhost:3000/shortCutPath/${req.file.filename}`;
                let userObj = new User(req.body);
                userObj.save((err, doc) => {
                    err
                        ?
                        res.json({ msg: "Error" }) :
                        res.json({ msg: "Added With Success" });
                });
            });
        } else {
            res.json({ msg: "Email Exist" });
        }
    });
});
// BL : Get All Users
app.get("/users", (req, res) => {
    console.log("Here into BL: Get All Users");
    User.find().then((docs) => {
        res.json({ users: docs });
    });
});

// BL: Login
app.post("/users/login", (req, res) => {
    User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            bcrypt.compare(req.body.pwd, user.pwd).then((pwdResult) => {
                if (pwdResult) {
                    let obj = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        role: user.role,
                        email: user.email,
                        id: user._id,
                        photo: user.avatar
                    };
                    // generate token
                    const token = jwt.sign(obj, secretKey, { expiresIn: "1h" });
                    res.json({
                        token: token,
                        msg: "welcome",
                    });
                } else {
                    res.json({ msg: "Please check Your Pwd !!" });
                }
            });
        } else {
            res.json({ msg: "Please check your Email !!" });
        }
    });
});

// BL : Search Matches By Scores (POST)
app.post("/search", (req, res) => {
    console.log("Here into BL: Search Matches", req.body);
    let result = matchesData.filter(
        (obj) =>
        obj.scoreOne == req.body.scoreOne && obj.scoreTwo == req.body.scoreTwo
    );

    result.length == 0 ?
        res.json({ msg: "No Matches Found" }) :
        res.json({ matches: result });
});

// BL : Search Matches By Scores (GET)
app.get("/search/:s1/:s2", (req, res) => {
    console.log("Here into BL: Search Matches");
    let result = matchesData.filter(
        (obj) => obj.scoreOne == req.params.s1 && obj.scoreTwo == req.params.s2
    );

    result.length == 0 ?
        res.json({ msg: "No Matches Found" }) :
        res.json({ matches: result });
});

// BL : Search Matches By Stadium name (SOL 1)
app.post("/search/matchesByStadium", (req, res) => {
    console.log("Here into BL: Search matches by stadium name", req.body);
    let stadium = stadiumsTab.find((elt) => elt.name == req.body.name);
    let matches = matchesData.filter((elt) => elt.stadiumId == stadium.id);
    matches.length == 0 ?
        res.json({ msg: "No Matches Found" }) :
        res.json({ tab: matches });
});

// BL : Search Matches By Stadium name (SOL 2)
app.get("/searchMatchByStadiumName/:name", (req, res) => {
    console.log("Here into BL: Search matches by stadium name");
    let stadium = stadiumsTab.find((elt) => elt.name == req.params.name);
    if (stadium) {
        let matches = matchesData.filter((elt) => elt.stadiumId == stadium.id);
        matches.length == 0 ?
            res.json({ msg: "No Matches Found" }) :
            res.json({ tab: matches });
    } else {
        res.json({ msg: "Stadium Not Found" });
    }
});

// BL : Search Team Players
app.get("/searchTeamPlayers/:teamName", (req, res) => {
    console.log("Here into BL: search players by team name", req.params.teamName);
    let team = teamsData.find((elt) => elt.name == req.params.teamName);
    if (team) {
        let players = playersData.filter((elt) => elt.teamId == team.id);
        players.length == 0 ?
            res.json({ msg: "No Players Found" }) :
            res.json({ players: players });
    } else {
        res.json({ msg: `No team founded by name : ${req.params.teamName}` });
    }
});

// BL : Get All Teams
app.get("/teams", (req, res) => {
    console.log("Here into BL : Get All Teams");
    Team.find()
        .populate("players")
        .then((docs) => {
            res.json({ teams: docs });
        });
});

// BL : Get All Players
app.get("/players", (req, res) => {
    console.log("Here into BL : Get All Players");
    Player.find().then((docs) => {
        res.json({ players: docs });
    });
});

// BL : Add Team
app.post("/teams", (req, res) => {
    // traitement logique
    console.log("Here into BL : Add Team", req.body);
    let teamObj = new Team(req.body);
    teamObj.save();
    res.json({ msg: "Added with success" });
});

// BL : Add Player
app.post("/players", (req, res) => {
    // traitement logique
    console.log("Here into BL : Add Player", req.body);
    // Team.findOne({_id:req.body.teamID})
    Team.findById(req.body.teamID).then((teamObj) => {
        if (!teamObj) {
            res.json({ msg: "Team Not Found" });
        } else {
            // create player instance
            let player = new Player({
                name: req.body.name,
                position: req.body.position,
                nbr: req.body.nbr,
                age: req.body.age,
                team: teamObj._id,
            });
            player.save((err, doc) => {
                if (err) {
                    res.json({ msg: "Player Not Saved" });
                } else {
                    teamObj.players.push(doc);
                    teamObj.save();
                    res.json({ msg: "Player added with success" });
                }
            });
        }
    });
});

// BL : Search Weather
app.post("/weather", (req, res) => {
    console.log("Here obj", req.body);
    let key = "62ee756a34835483299877a61961cafb";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`;
    axios.get(apiURL).then((apiResponse) => {
        console.log("Here api response", apiResponse.data);
        let result = {
            temp: apiResponse.data.main.temp,
            pressure: apiResponse.data.main.pressure,
            speed: apiResponse.data.wind.speed,
            image: `https://openweathermap.org/img/wn/${apiResponse.data.weather[0].icon}@2x.png`,
        };
        res.json({ result: result });
    });
});
// make app exportable
module.exports = app;