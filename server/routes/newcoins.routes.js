const express = require("express");
const { verifySecretToken } = require("../middlewares/auth.middleware");
const {
    createNewcoins,
    getAllNewcoins,
    // getSingleHotList,
    updateNewcoins,
    deleteNewcoins,
} = require("../controllers/newcoinsRouter.controllers");

const newcoinsRouter = express.Router();

// user routes
newcoinsRouter.get("/", getAllNewcoins);

// admin routes
// newcoinsRouter.post("/", verifyJWT, verifyAdmin, createLists);
// newcoinsRouter.put("/:id", verifyJWT, verifyAdmin, updateLists);
// newcoinsRouter.delete("/:id", verifyJWT, verifyAdmin, deleteLists);

newcoinsRouter.post("/createlist", verifySecretToken, createNewcoins);
newcoinsRouter.put("/updatelist", verifySecretToken, updateNewcoins);
newcoinsRouter.delete("/deletelist", verifySecretToken, deleteNewcoins);


module.exports = newcoinsRouter;