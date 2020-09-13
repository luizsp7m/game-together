const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model');

const AuthValidation = async (req, res, next) => {
    const token = req.query.token || req.headers['x-access-token'];

    if (!token) {
        return res.status(401).json({ message: 'Acesso restrito' });
    }

    try {
        const userToken = jwt.verify(token, 'Secret');

        const user = await userModel.findById(userToken._id);

        if (!user) {
            return res.status(400).json({ message: 'Usuário não existe no banco de dados' });
        }

        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}

module.exports = AuthValidation;