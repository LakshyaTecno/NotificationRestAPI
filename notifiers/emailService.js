/**
 * This file will contain the sample code for sending the email notification
 */
const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  //host: "smtp.gmail.com",
  service: "gmail",
  auth: {
    user: "lakshyatecno@gmail.com",
    pass: "rgmgvwyrdybnepor",
  },
  secure: true,
});
