const router = require('express').Router();
const Secions = require('../Models/Secions')

router.get('/Secions', async (req, res) => {
  try {
    const result = await Secions.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})

router.post('/newSecions', async (req, res) => {
  try {
    const result = await Secions.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})

router.put('/editSecions/:id', async (req, res) => {
  try {
    const result = await Secions.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})

router.delete('/deleteSecions', async (req, res) => {
  try {
    const result = await Secions.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})

module.exports = router;