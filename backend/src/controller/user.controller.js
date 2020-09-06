const UserModel = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

class UserController {
    async create(req, res) {
        const user = new UserModel(req.body);
        await user.save().then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(500).json(error);
        });
    }

    async authenticate(req, res) {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'Usuário não cadastrado' });
        } else {
            bcrypt.compare(password, user.password, (err, data) => {
                if (err) throw err
                if (data) {
                    const decodedToken = { _id: user._id, email: user.email };
                    const token = jwt.sign(decodedToken, 'Secret', { expiresIn: '1d' });
                    return res.status(200).json({
                        user: user,
                        token: token
                    })
                } else {
                    return res.status(401).json({ msg: "Invalid credencial" })
                }

            })
        }
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
        await UserModel.findById(req.params.id).then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(404).json({ error: "Usuário não encontrado" });
        });
    }

    async delete(req, res) {
        await UserModel.deleteOne({ '_id': req.params.id }).then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(500).json(error);
        });
    }
}

module.exports = new UserController();