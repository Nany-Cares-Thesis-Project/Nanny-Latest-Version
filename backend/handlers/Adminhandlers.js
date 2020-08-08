var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
var bcrypt = require("bcrypt");
var items = require("../models/user");
var session = require("express-session");
var cookieParser = require("cookie-parser");

app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ name: "session-id", secret: "SuraSession" }));
var saltRounds = 10;
var Admin = items.Admin;
var Nany = items.Nany;
var User = items.User;

require("dotenv").config(); // to read .env file
module.exports = {
  insert: function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var email = req.body.email;
    var phoneNumber = req.body.phoneNumber;
    var kidsNum = req.body.kidsNum;
    var place = req.body.place;
    var educationLevel = req.body.educationLevel;
    var age = req.body.age;
    var workingHour = req.body.workingHour;
    var cost = req.body.cost;
    var experianceLevel = req.body.experianceLevel;
    const newNany = new Nany({
      name,
      image,
      email,
      phoneNumber,
      kidsNum,
      place,
      educationLevel,
      age,
      workingHour,
      cost,
      experianceLevel,
    });

    newNany
      .save()
      .then(() => res.json("Nanny Added"))
      .catch((err) => res.status(400).json("Error:" + err));
  },

  adminSignUp: function (req, res) {
    console.log(req.body, "body");
    console.log(req.query, "query");
    var newAdmin = new Admin({
      userName: req.body.userName,
      password: req.body.password,
    });
    Admin.findOne({ userName: newAdmin.userName })
      .then((profile) => {
        if (!profile) {
          bcrypt.hash(newAdmin.password, saltRounds, function (err, hash) {
            if (err) {
              console.log("Error is", err.message);
            } else {
              newAdmin.password = hash;
              newAdmin
                .save()
                .then(() => {
                  res.send("Admin authenticated");
                })
                .catch((err) => {
                  console.log("Error is ", err.message);
                });
            }
          });
        } else {
          res.send("Admin already exists...");
        }
      })
      .catch((err) => {
        console.log("Error is", err.message);
      });
  },
  adminLogIn: function (req, res) {
    var admin = new Admin({
      userName: req.body.userName,
      password: req.body.password,
    });

    Admin.findOne({ userName: admin.userName })
      .then((profile) => {
        if (!profile) {
          res.send("Admin not exist");
        } else {
          bcrypt.compare(admin.password, profile.password, function (
            err,
            result
          ) {
            if (err) {
              console.log("Error is", err.message);
            } else if (result == true) {
              console.log(req);
              req.session.user = profile;

              res.cookie("user", "user", {
                signed: true,
                maxAge: 1000 * 60 * 60,
              });
              var userInfo = {
                user: profile,
                result: result,
              };
              res.status(200).send("Admin log in");
            } else {
              res.send("User Unauthorized Access");
            }
          });
        }
      })
      .catch((err) => {
        console.log("Error is ", err.message);
      });
  },


  retriveAllNanies: function (req, res) {
    Nany.find(function (err, nannies) {
      if (err) {
        throw err;
      }
      res.json(nannies);
    });
  },
  deleteSpecificNany: function (req, res) {
    Nany.findOne({_id: req.params.id})
      .then((item) => item.remove().then(() => res.json({ success: true })))
      .catch((err) => res.status(404).json({ success: false }));
  },
  updateNanyInformation: function (req, res) {
    Nany.findById(req.params.id).then((item) =>
      item
        .update({ content: req.body.content })
        .then(() => res.json({ success: true }))
    );
  },
  addNewNanny: function(req, res) {
    const newNanny = new Nany({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        place: req.body.place,
        kidsNum: req.body.kidsNum,
        cost: req.body.cost,
        educationLevel: req.body.educationLevel,
        experianceLevel: req.body.experianceLevel,
        age: req.body.age,
        workingHour: req.body.workingHour,
    });
    newNanny.save()
          .then(console.log('added'));
  }
};
