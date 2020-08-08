var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

const cors = require("cors");
const nodemailer = require("nodemailer");

var bcrypt = require("bcrypt");
var items = require("../models/user");

var app = express();

app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var saltRounds = 10;
var Nany = items.Nany;
var User = items.User;
var port = process.env.PORT || 5000;

require("dotenv").config(); // to read .env file
module.exports = {
  HiringForm: function (req, res) {
    console.log(req.body);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nannyHirring@gmail.com",
        pass: "nannyHirring12345",
      },
    });

    let mailOptions = {
      from: "nannyHirring@gmail.com",
      to: "nannycarecom@gmail.com",
      subject: "Hiring form",
      text:
        "Name : " +
        req.body.Name +
        "\n Age : " +
        req.body.Age +
        "\n Email : " +
        req.body.Email +
        "\n Phone number  : " +
        req.body.PhoneNumber +
        "\n Number of kids i canHandel : " +
        req.body.NumberOfKidsYouCanHandel +
        "\n Place : " +
        req.body.Place +
        "\n EducationLevel : " +
        req.body.EducationLevel +
        "\n How manny hours i can work a day : " +
        req.body.HowMannyHoursYouCanWorkADay +
        "\n Experens level : " +
        req.body.ExperensLevel,
    };

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        res.status(400).json("Error:" + err);
      }
      res.json("Email send");
    });
  },
  retrieve: function (req, res) {
    console.log("Hi");
    Nany.find({}, function (err, nany) {
      if (err) {
        res.json(err);
      } else {
        console.log(req);
        res.json(nany);
      }
    });
  },

  reserve: function (req, res) {
    var reserveData = req.body;
    console.log("fnh", req.body);
    res.json(reserveData);
  },
};
