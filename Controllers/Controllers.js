const User = require('../Models/User')

// Get user
exports.getUser = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Get user by ID

exports.getUser = async (req, res) => {
  try {
    const result = await User.findById(req.params.id); //use ID as param
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'No existe este usuario' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
exports.postNewUser = async (req, res) => {
  try {
    const result = await User.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.editUser = async (req, res) => {
  try {
    const result = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'No existe este usuario' });

    }
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const result = await User.findOneAndDelete({ _id: req.params.id });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'No existe este usuario ' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

exports.postNewUser = async (req, res) => {
  try {
    const result = await User.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
