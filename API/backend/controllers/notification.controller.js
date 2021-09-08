Notification = require("../models/notification.model");

exports.index = function (req, res) {
  Notification.get(function (err, notifications) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json(notifications);
  });
};

exports.new = function (req, res) {
  var notification = new Notification();
  notification.title = req.body.title;
  notification.type = req.body.type;
  notification.msg = req.body.msg;
  notification.show = req.body.show;
  notification.timeout = req.body.timeout;
  notification.username = req.body.username;

  notification.save(function (err) {
    res.json({
      message: "New notification created!",
      data: notification,
    });
  });
};

exports.view = function (req, res) {
  Notification.findById(
    req.params.notification_id,
    function (err, notification) {
      if (err) res.send(err);
      res.json(notification);
    }
  );
};
exports.viewUsersNotifications = function (req, res) {
  var query = { username: req.params.username };
  Notification.find(query,
    function (err, notification) {
      if (err) res.send(res.json({message:"No Notifications Added"}));
      res.json(notification);
    });
};
exports.update = function (req, res) {
  Notification.findById(
    req.params.notification_id,
    function (err, notification) {
      if (err) res.send(err);
      notification.title = req.body.title;
      notification.type = req.body.type;
      notification.msg = req.body.msg;
      notification.show = req.body.show;
      notification.timeout = req.body.timeout;
      notification.username = req.body.username;

      notification.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Notification Info updated",
          data: notification,
        });
      });
    }
  );
};

exports.delete = function (req, res) {
  Notification.remove(
    {
      _id: req.params.notification_id,
    },
    function (err, notification) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Notification deleted",
      });
    }
  );
};
