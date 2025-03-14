const express = require('express');
const getGithubName = require('../controller/controller.js');

const router = express.Router();

router.get('/repositories', getGithubName.userName);

module.exports = router;
