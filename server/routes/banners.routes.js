// banners.routes.js
const express = require("express");

const { verifySecretToken } = require("../middlewares/auth.middleware");

const {
  uploadBanners,
  createBanner,
  getAllBanners,
  updateBanners,
  deleteBanners,
} = require("../controllers/banners.controllers");


// const {
//   getAllBanners,
// } = require("../controllers/banners.controllers");


const bannersRouter = express.Router();

// admin routes
bannersRouter.post("/upload", verifySecretToken, uploadBanners, createBanner);
bannersRouter.put("/update", verifySecretToken, updateBanners);
bannersRouter.delete("/delete", verifySecretToken, deleteBanners);

// user routes
bannersRouter.get("/", getAllBanners);

module.exports = bannersRouter;
