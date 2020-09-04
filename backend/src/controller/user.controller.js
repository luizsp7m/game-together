const UserModel = require('../model/user.model');

class UserController {
    async create(req, res) {
        const user = new UserModel(req.body);
        await user.save().then(response => {
            return res.status(200).json(response);
        }).catch(err => {
            return res.status(500).json(err);
        });
    }
}

module.exports = new UserController();