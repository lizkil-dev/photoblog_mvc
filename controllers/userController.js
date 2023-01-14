const cloudinary = require("../middleware/cloudinary");
const Pic = require('../models/picModel')
const User = require('../models/userModel')

module.exports = {
getProfile : async (req, res) => {
  try {
    const pics = await Pic.find({ user: req.user.id });
    res.render("profile.ejs", { pics: pics, user: req.user });
  } catch (err) {
    console.log(err);
  }
},

addPost : async (req, res) => {
  try {
    const pics = await Pic.find({ user: req.user.id });
    res.render("addPost.ejs", { pics: pics, user: req.user });
  } catch (err) {
    console.log(err);
  }
},

getFeed: async (req, res) => {
  try {
    const pics = await Pic.find().sort({ createdAt: "desc" }).lean();
    res.render("feed.ejs", { pics: pics });
  } catch (err) {
    console.log(err);
  }
},
getPic : async (req, res) => {
  try {
    const pic = await Pic.findById(req.params.id);
    const creator = await User.findById(pic.user)
    res.render("pic.ejs", { pic: pic, user: req.user, creator: creator.userName});   
  } catch (err) {
    console.log(err);
  }
},

createPic : async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(req);
    

    await Pic.create({
      title: req.body.title,
      image: result.secure_url,
      cloudinaryId: result.public_id,
      caption: req.body.caption,
      likes: 0,
      user: req.user.id,
    });
    
    res.redirect("/user/profile");    
  } catch (err) {
    console.log(err);
  }
},

likePic: async (req, res) => {
  try {
    await Pic.findOneAndUpdate(
      { _id: req.params.id },
      {
        $inc: { likes: 1 },
      }
    );
    console.log("Likes +1");
    res.redirect(`/user/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
},

deletePic : async (req, res) => {
  try {
    const pic = await Pic.findById(req.params.id)

    if(!pic) {
      res.status(400)
      throw new Error('Picture not found')
    }

    await Pic.findByIdAndRemove(req.params.id)
    console.log("Picture has been removed!");
    res.redirect("/user/profile");   
  } catch (err) {
    console.log(err);
  }
},
};