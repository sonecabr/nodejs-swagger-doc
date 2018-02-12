'use strict';
const router = require('express').Router();
const passport = require('passport');

const mock = require("../mock");

const userHasAccess = (req, res, next) => {
    next();      
}

module.exports = {
    userHasAccess
}