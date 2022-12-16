const express = require('express');
const router = express.Router();
const authCon = require("../controllers/authController");
const mainCon = require("../controllers/mainController");



//Main Routes
router.get('/', mainCon.getMain); 

router.get("/login", authCon.getLogin)
router.post("/login", authCon.postLogin); 

router.get("/logout", authCon.getLogout); 

router.get("/signup", authCon.getSignup )
router.post("/signup", authCon.postSignup )

module.exports = router