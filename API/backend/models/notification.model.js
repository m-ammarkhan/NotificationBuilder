var mongoose = require('mongoose');
// Setup schema
var notificationSchema = mongoose.Schema({
    title: String,
    type: String,
    msg: String,
    show: Boolean,
    timeout: Number,
    username: String
});
// Export Contact model
var Notification = module.exports = mongoose.model('notification', notificationSchema);
module.exports.get = function (callback, limit) {
    
    Notification.find(callback).limit(limit);
}