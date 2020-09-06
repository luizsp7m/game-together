const UserModel = require('../model/user.model');

const UserValidation = async (req, res, next) => {
    const { email, password, name } = req.body;

    if (!email) return res.status(400).json({error: 'O campo e-mail é obrigatório'});
    else if (!password) return res.status(400).json({error: 'O campo senha é obrigatório'});
    else if (!name) return res.status(400).json({error: 'O campo nome é obrigatório'});
    else {
        var exists;
        
        exists = await UserModel.findOne({ 'email': {'$eq': email} });

        if(exists) {
            return res.status(400).json({error: 'Já existe um cadastro nesse e-mail'});
        }

        next();
    }
}

module.exports = UserValidation;