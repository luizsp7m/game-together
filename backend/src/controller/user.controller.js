const UserModel = require('../model/user.model');

class UserController {
    async create(req, res) {
        const user = new UserModel(req.body);
        await user.save().then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(500).json(error);
        });
    }

    async update(req, res) {
        await UserModel.findOneAndUpdate({ '_id': req.params.id }, req.body, { new: true }).then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(500).json(error);
        });
    }

    async all(req, res) {
        await UserModel.find({}).then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(500).json(error);
        })
    }

    async show(req, res) {
        await UserModel.findById( req.params.id ).then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(404).json({error: "Usuário não encontrado"});
        });
    }
}

module.exports = new UserController();