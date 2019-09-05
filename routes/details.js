const express = require('express');
const router = express.Router();

router.get('/:model', (req, res) => {
  Post.findOne({ model: req.params.model})
    .then((details) => {
      res.status(200).json(details)
    })
    .catch(() => {
      res.status(500).json({
        message: 'Something went wrong, please try again later.'
      });
    });
});

module.exports = router;
