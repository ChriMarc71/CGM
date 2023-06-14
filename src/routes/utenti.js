const express = require("express")
const router = express.Router();
let bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.raw({inflate:true, limit: '100kb', type: 'application/json'}));
router.use(bodyParser.json({ type: 'application/*+json' }))

const userController = require('./../controllers/controllers.js');

router.route("/:id")
    .get(userController.getUserById)
    .put(userController.putUserById)
    .delete(userController.deleteUserById)
    
router.get("/",userController.getAllUsers)
    
router.post("/",userController.postNewUser)


module.exports = router;