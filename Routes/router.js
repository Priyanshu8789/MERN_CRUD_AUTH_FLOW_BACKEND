const express = require("express");
const { userpost } = require("../Controllers/usersController");
const router =  express.Router();




// routes
router.post("/user/register",userpost)









module.exports = router