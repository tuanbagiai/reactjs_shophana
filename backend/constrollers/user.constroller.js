import User from '../models/userModel';
import { getToken } from '../until';
module.exports = {
    LOGIN: async (req, res) => {

        const signinUser = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if (signinUser) {
            res.send({
                _id: signinUser.id,
                name: signinUser.name,
                email: signinUser.email,
                isAdmin: signinUser.isAdmin,
                token: getToken(signinUser)
            })

        } else {
            res.status(401).send({ msg: 'Invalid Email or Password.' });
        }

    }

}