const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Mobiles = require('../models/mobiles');
const Details = require('../models/details');

router.get('/:keys', (req, res) => {

  if (req.headers['content-type'] && req.headers['content-type'].includes('application/json')) {
    if (req.params.key !== 'undefined') {
      let arrayOfKeys = req.params.keys.split(',');
      Details.find({key : {$in:arrayOfKeys}})
      .then(mobiles => {
        res.status(200).json(mobiles);
      })
      .catch(error => {
        res.status(500).json({
          message: 'Something went wrong, please try again later.'
        });
      });
    } else {
      res.status(500).json({
        message: 'Something went wrong, please try again later.'
      });
    }

  } else {
    res.status(415).json({
      message: 'Bad request header settings.'
    });
  }
});
module.exports = router;
