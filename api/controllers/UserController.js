const Joi = require('joi');
const User = require('../models/User');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');
const { createUser, loginUser } = require('../validations/user.validation');

const UserController = () => {
  const register = async (req, res) => {
    Joi.validate(req.body, createUser).then(async () => {

      const { body } = req;


      try {
        let email = body.email;
        const existingUser = await User
          .findOne({
            where: {
              email,
            },
          });

        if (existingUser) {
          return res.status(400).json({ msg: `Account already exists for '${email}'` });
        }
        const user = await User.create({
          email: body.email,
          password: body.password,
          name: body.name,
          phone_number: body.phone_number
        });
        const token = authService().issue({ id: user.id });

        return res.status(200).json({ token, user });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }

    }).catch(err => res.status(400).json({ msg: err.details[0].message.replace(/["']/g, '') }))
  };

  const login = async (req, res) => {
    Joi.validate(req.body, loginUser).then(async () => {
      const { email, password } = req.body;

      if (email && password) {
        try {
          const user = await User
            .findOne({
              where: {
                email,
              },
            });

          if (!user) {
            return res.status(400).json({ msg: 'Bad Request: User not found' });
          }

          if (bcryptService().comparePassword(password, user.password)) {
            const token = authService().issue({ id: user.id });

            return res.status(200).json({ token, user });
          }

          return res.status(401).json({ msg: 'Unauthorized' });
        } catch (err) {
          console.log(err);
          return res.status(500).json({ msg: 'Internal server error' });
        }
      }

      return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });

    }).catch(err => res.status(400).json({ msg: err.details[0].message.replace(/["']/g, '') }))
  };

  const validate = (req, res) => {
    const { token } = req.body;

    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  const getAll = async (req, res) => {
    try {
      const users = await User.findAll();

      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };


  return {
    register,
    login,
    validate,
    getAll,
  };
};

module.exports = UserController;
