const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

// const Class = require('../models/classes');

router.get('/', (req, res) => {
  res.send('Hello Examples!')
});

module.exports = router;
