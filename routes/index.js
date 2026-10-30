//API ENDPOINTS
const express=require('express') //framework API
const router=express.Router();
const userController=require('../controllers/userController');

//endpoint
router.get('/users', userController.getAllUsers);
module.exports.router;