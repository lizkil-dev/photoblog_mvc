const express = require('express');
const router = express.Router();
const upload = require("../middleware/multer");
const userCon = require("../controllers/userController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get("/profile", ensureAuth, userCon.getProfile);

router.get("/addPost", ensureAuth, userCon.addPost);

router.get("/feed", ensureAuth, userCon.getFeed)

router.get("/:id", ensureAuth, userCon.getPic); 

router.post("/createPic", upload.single("file"), userCon.createPic); 

router.put("/likePic/:id", userCon.likePic);

// router.get("/updatePic/:id", ensureAuth, userCon.getUpdatePic)

// router.put("/updatePic/:id", ensureAuth, userCon.updatePic); 

router.delete("/deletePic/:id", userCon.deletePic); 

module.exports = router