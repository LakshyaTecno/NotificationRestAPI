const Notification = require("../models/notification.model");
const validateCreateNotification = async (req, res, next) => {
  if (!req.body.subject) {
    return res.status(400).send({
      message: "Failed subject is not provided",
    });
  }
  if (!req.body.recepientEmails) {
    return res.status(400).send({
      message: "Failed recepientEmails is not provided",
    });
  }
  if (!req.body.content) {
    return res.status(400).send({
      message: "Failed content is not provided",
    });
  }
  next();
};

const isValidNotificationIdInRequestParam = async (req, res, next) => {
  try {
    const trackingId = req.params.id;

    const notificaton = await Notification.findOne({ _id: trackingId });

    if (!notificaton) {
      return res.status(400).send({
        message: "trackingId passed doesn't exist",
      });
    }
    next();
  } catch (err) {
    console.log("Error while reading the user info", err.message);
    return res.status(500).send({
      message: "Some Internal server error",
    });
  }
};

const verifyNotificationtRequestBodies = {
  validateCreateNotification: validateCreateNotification,
  isValidNotificationIdInRequestParam: isValidNotificationIdInRequestParam,
};
module.exports = verifyNotificationtRequestBodies;
