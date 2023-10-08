const express = require(express);

const router = express.Router();
const homeController = require('../controller/home_controller');


console.log('router loaded');

router.get('/', homeController.home);
router.get('/user', require('/users'));
router.use('/post', require('./post'));
router.use('/comments', require('./comments'));

// for any further routes, access for home 
// router.use('/routername', require ('./routerfile'));
module.export = router;
