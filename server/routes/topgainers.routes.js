const express = require("express");
const { verifySecretToken } = require("../middlewares/auth.middleware");

const {
    createTopgainers,
    getAllTopgainers,
    // getSingleHotList,
    updateTopgainers,
    deleteTopgainers,
} = require("../controllers/topgainersRouter.controllers");

const topgainersRouter = express.Router();

// user routes
topgainersRouter.get("/", getAllTopgainers);

// admin routes
// topgainersRouter.post("/", verifyJWT, verifyAdmin, createTopgainers);
// topgainersRouter.put("/:id", verifyJWT, verifyAdmin, updateTopgainers);
// topgainersRouter.delete("/:id", verifyJWT, verifyAdmin, deleteTopgainers);

topgainersRouter.post("/createlist",verifySecretToken, createTopgainers);
topgainersRouter.put("/updatelist/",verifySecretToken, updateTopgainers);
topgainersRouter.delete("/deletelist/",verifySecretToken, deleteTopgainers);


module.exports = topgainersRouter;