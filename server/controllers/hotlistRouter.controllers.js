const hotListModels = require("../models/hotlists.model");

const createHotList = async (req, res) => {
  try {
    const { symbol, link, percentageChange, price, symbolImage, name } = req.body;

    const newImage = new hotListModels({
      symbol, link, percentageChange, price, symbolImage, name 
    });

    const savedImage = await newImage.save();

    res.status(201).json(savedImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllHotList = async (req, res) => {
  const result = await hotListModels.find().sort({
    createdAt: -1
  });
  res.send(result);
};

const getSingleHotList = async (req, res) => {
  const title = req.params.title;
  const formattedTitle = title.replace(/-/g, " ");
  const result = await hotListModels.findOne({
    title: formattedTitle
  });
  res.send(result);
};

const updateList = async (req, res) => {
  const identifiers = req.body.identifiers;
  const newData = req.body.newData;

  try {
    if (!identifiers || typeof identifiers !== 'object' || !newData || typeof newData !== 'object') {
      return res.status(400).json({ error: "Identifiers and newData must be objects" });
    }

    const query = {};

    Object.entries(identifiers).forEach(([identifierType, identifierValue]) => {
      query[identifierType] = identifierValue;
    });

    console.log("Query:", query);

    const result = await hotListModels.findOneAndUpdate(query, { $set: newData }, { new: true });

    if (!result) {
      console.log("Document not found for update");
      return res.status(404).json({ error: "Hotlist not found" });
    }

    console.log("Document updated successfully:", result);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteHotList = async (req, res) => {
  const identifiers = req.body.identifiers;

  try {
    if (!identifiers || typeof identifiers !== 'object') {
      return res.status(400).json({ error: "Identifiers must be an object" });
    }

    const query = {};

    Object.entries(identifiers).forEach(([identifierType, identifierValue]) => {
      query[identifierType] = identifierValue;
    });

    const result = await hotListModels.findOneAndDelete(query);

    if (!result) {
      // If result is null, the hotlist with the specified identifier was not found
      return res.status(404).json({ error: "Hotlist not found" });
    }

    res.status(200).json({ message: "Hotlist deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createHotList,
  getAllHotList,
  getSingleHotList,
  updateList,
  deleteHotList,
};
