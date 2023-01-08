/**
 * Define the schema for the notification model
 */
const mongoose = require("mongoose");
const constants = require("../utils/constants");

const notificationSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  recepientEmails: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  requester: {
    type: String,
  },
  /**
   * Move this string literal to the Utils module
   */
  status: {
    type: String,
    default: constants.status.unsent,
    enum: [constants.status.unsent, constants.status.sent],
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => {
      return Date.now();
    },
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
});

module.exports = mongoose.model("notification", notificationSchema);
