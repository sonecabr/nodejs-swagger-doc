'use strict';
const express = require('express');
const passport = require('passport');
const router = express.Router();
const auth = require('./auth');

router.use('/',
  passport.authenticate('bearer', { session: false }),
  (req, res, next) => {
    console.log('logged');
    auth.userHasAccess(req, res, next);
  }
);

/**
 * @swagger
 * /{ctx_name}/health:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Health
 *     summary: Show Health Status
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: ctx_name
 *        description: context name
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/:ctx_name/health/', (req, res, next) => {
   console.log('test');
   const response = {status: 'OK', ctx: req.params.ctx_name}
   res.status(200).json(response); 

});

module.exports = router;
