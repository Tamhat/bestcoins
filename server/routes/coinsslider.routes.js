const express = require("express");
const { verifySecretToken } = require("../middlewares/auth.middleware");

const {
    createCoinsslider1,
    createCoinsslider2,
    createCoinsslider3,
    getAllCoinsslider1,
    getAllCoinsslider2,
    getAllCoinsslider3,
    // getSingleHotList,
    updateCoinsslider1,
    updateCoinsslider2,
    updateCoinsslider3,
    deleteCoinsslider1,
    deleteCoinsslider2,
    deleteCoinsslider3,
} = require("../controllers/coinsslider.controllers");

const coinsslider = express.Router();

// user routes
coinsslider.get("/1", getAllCoinsslider1);
coinsslider.get("/2", getAllCoinsslider2);
coinsslider.get("/3", getAllCoinsslider3);

// admin routes
coinsslider.post("/createlist1",verifySecretToken, createCoinsslider1);
coinsslider.post("/createlist2",verifySecretToken, createCoinsslider2);
coinsslider.post("/createlist3",verifySecretToken, createCoinsslider3);
coinsslider.put("/updatelist1/",verifySecretToken, updateCoinsslider1);
coinsslider.put("/updatelist2/",verifySecretToken, updateCoinsslider2);
coinsslider.put("/updatelist3/",verifySecretToken, updateCoinsslider3);
coinsslider.delete("/deletelist1/",verifySecretToken, deleteCoinsslider1);
coinsslider.delete("/deletelist2/",verifySecretToken, deleteCoinsslider2);
coinsslider.delete("/deletelist3/",verifySecretToken, deleteCoinsslider3);


module.exports = coinsslider;