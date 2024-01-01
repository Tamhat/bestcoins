// banner.controllers.js
const multer = require('multer');
const path = require('path');
const Image = require("../models/banner.models");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Define the file name
  }
});

const upload = multer({ storage });

const uploadBanners = upload.single('bannerImage');

const createBanner = async (req, res) => {
  try {
    const { imageUrl } = req.body;

    const newImage = new Image({
      imageUrl
    });

    const savedImage = await newImage.save();

    res.status(201).json(savedImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateBanners = async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ error: "imageUrl is required" });
    }

    const { newImageUrl } = req.body;

    const updatedBanner = await Image.findOneAndUpdate(
      { imageUrl },
      { imageUrl: newImageUrl },
      { new: true }
    );

    if (!updatedBanner) {
      return res.status(404).json({ error: "Banner not found" });
    }

    res.status(200).json(updatedBanner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBanners = async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ error: "imageUrl is required" });
    }

    const deletedBanner = await Image.findOneAndDelete({ imageUrl });

    if (!deletedBanner) {
      return res.status(404).json({ error: "Banner not found" });
    }

    res.status(200).json({ message: "Banner deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllBanners = async (req, res) => {
  try {
    const allBanners = await Image.find();
    res.status(200).json(allBanners);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}

module.exports = {
  uploadBanners,
  getAllBanners,
  updateBanners,
  deleteBanners,
  createBanner,
};