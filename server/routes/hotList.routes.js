const express = require("express");
const { verifySecretToken } = require("../middlewares/auth.middleware");
const {
    createHotList,
    getAllHotList,
    updateList,
    deleteHotList,
} = require("../controllers/hotlistRouter.controllers");

const hotListRouter = express.Router();

// user routes
hotListRouter.get("/", getAllHotList);

// admin routes
hotListRouter.post("/createlist", verifySecretToken, createHotList);
hotListRouter.put("/updatelist", verifySecretToken, updateList);
hotListRouter.delete("/deletelist/", verifySecretToken, deleteHotList);


module.exports = hotListRouter;