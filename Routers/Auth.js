const router = require('express').Router();
const User = require('../Models/User');
const jwt = require('jsonwebtoken');

// Password
const bcrypt = require('bcrypt');

// Validation
const Joi = require('@hapi/joi');

const schemaRegister = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
})

const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
})

// Register route

router.post('/register', async (req, res) => {

  // validate user
  const { error } = schemaRegister.validate(req.body)

  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }

  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist) {
    return res.status(400).json({ error: 'Email ya registrado' })
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: password
  });
  try {
    const savedUser = await user.save();
    res.json({
      error: null,
      data: savedUser
    })
  } catch (error) {
    res.status(400).json({ error })
  }
})

// Login route

router.post('/login', async (req, res) => {
  // validaciones
  const { error } = schemaLogin.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message })

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })

  res.json({
    error: null,
    data: 'exito bienvenido'
  })
})

module.exports = router;