let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var notificationController = require('../controllers/notification.controller');
// Contact routes
router.route('/notifications')
    .get(notificationController.index)
    .post(notificationController.new);
router.route('/notifications/:notification_id')
    .get(notificationController.view)
    .patch(notificationController.update)
    .put(notificationController.update)
    .delete(notificationController.delete);

router.get('/notifications/user/:username', notificationController.viewUsersNotifications);
// Export API routes
module.exports = router;