const express  = require('express');


const UsersController = require('./controllers/UsersControllers');

const router = express.Router(); 


router.post("/users", UsersController.createuser);
router.get("users", UsersController)

module.exports = router;



