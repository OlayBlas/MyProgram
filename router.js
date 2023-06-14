const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');
const log = require('./controllers/logger');
const twitController= require('./controllers/twtCTRL');



router.get('/', log.logger, controller.mainPage);

router.get('/login',log.logger, controller.renderLogin);
router.post('/login', log.logger,controller.login);

router.get('/register', log.logger,controller.renderRegister);
router.post('/register',log.logger, controller.register);

router.get('/user', log.logger,controller.displayUsers);

router.get('/str', twitController.twtStreaming);



module.exports = router;





