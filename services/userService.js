const User = require('../models/User');

exports.createUser = async (data) => {
    const user = new User(data);
    return await user.save();
}
exports.getAllUsers = async () => {
    return await User.find();
}
exports.getUserById = async (id) => {
    return User.findById(id);
}
exports.updateUser = async (id, data) => {
    return User.findByIdAndUpdate(id, data, {new: true});
}
exports.deleteUser = async (id) => {
    return User.findByIdAndRemove(id);
}