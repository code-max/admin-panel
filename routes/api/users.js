const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
// @route POST api/users
// @desc  Register user
// @access public

router.get(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid mail').isEmail(),
    check(
      'password',
      'Please enter a password with 6  o more characters',
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // See if user exists

    // Encrypt password

    // Return JWT

    res.send('User route');
  },
);
module.exports = router;
