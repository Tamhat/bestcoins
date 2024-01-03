const { Coinsslider1, Coinsslider2, Coinsslider3 } = require("../models/coinsslider.models");

const createCoinsslider1 = async (req, res) => {
  try {
    const { symbolImage, name } = req.body;

    const newImage = new Coinsslider1({
      symbolImage, name
    });

    const savedImage = await newImage.save();

    res.status(201).json(savedImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createCoinsslider2 = async (req, res) => {
  try {
    const { symbolImage, name } = req.body;

    const newImage = new Coinsslider2({
      symbolImage, name
    });

    const savedImage = await newImage.save();

    res.status(201).json(savedImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createCoinsslider3 = async (req, res) => {
  try {
    const { symbolImage, name } = req.body;

    const newImage = new Coinsslider3({
      symbolImage, name
    });

    const savedImage = await newImage.save();

    res.status(201).json(savedImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllCoinsslider1 = async (req, res) => {
  const result1 = await Coinsslider1.find().sort({
    createdAt: -1
  });
  res.send(result1);
};
const getAllCoinsslider2 = async (req, res) => {
  const result2 = await Coinsslider2.find().sort({
    createdAt: -1
  });
  res.send(result2);
};
const getAllCoinsslider3 = async (req, res) => {
  const result3 = await Coinsslider3.find().sort({
    createdAt: -1
  });
  res.send(result3);
};

const getSingleHotList = async (req, res) => {
  const title = req.params.title;
  const formattedTitle = title.replace(/-/g, " ");
  const result = await Coinsslider1.findOne({
    title: formattedTitle
  });
  res.send(result);
};

const updateCoinsslider1 = async (req, res) => {
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

    const result = await Coinsslider1.findOneAndUpdate(query, { $set: newData }, { new: true });

    if (!result) {
      console.log("Document not found for update");
      return res.status(404).json({ error: "Coinsslider not found" });
    }

    console.log("Document updated successfully:", result);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};
const updateCoinsslider2 = async (req, res) => {
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

    const result = await Coinsslider2.findOneAndUpdate(query, { $set: newData }, { new: true });

    if (!result) {
      console.log("Document not found for update");
      return res.status(404).json({ error: "Coinsslider not found" });
    }

    console.log("Document updated successfully:", result);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};
const updateCoinsslider3 = async (req, res) => {
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

    const result = await Coinsslider3.findOneAndUpdate(query, { $set: newData }, { new: true });

    if (!result) {
      console.log("Document not found for update");
      return res.status(404).json({ error: "Coinsslider not found" });
    }

    console.log("Document updated successfully:", result);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteCoinsslider1 = async (req, res) => {
  const identifiers = req.body.identifiers;

  try {
    if (!identifiers || typeof identifiers !== 'object') {
      return res.status(400).json({ error: "Identifiers must be an object" });
    }

    const query = {};

    Object.entries(identifiers).forEach(([identifierType, identifierValue]) => {
      query[identifierType] = identifierValue;
    });

    const result = await Coinsslider1.findOneAndDelete(query);

    if (!result) {
      // If result is null, the hotlist with the specified identifier was not found
      return res.status(404).json({ error: "Coinsslider not found" });
    }

    res.status(200).json({ message: "Coinsslider deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteCoinsslider2 = async (req, res) => {
  const identifiers = req.body.identifiers;

  try {
    if (!identifiers || typeof identifiers !== 'object') {
      return res.status(400).json({ error: "Identifiers must be an object" });
    }

    const query = {};

    Object.entries(identifiers).forEach(([identifierType, identifierValue]) => {
      query[identifierType] = identifierValue;
    });

    const result = await Coinsslider2.findOneAndDelete(query);

    if (!result) {
      // If result is null, the hotlist with the specified identifier was not found
      return res.status(404).json({ error: "Coinsslider not found" });
    }

    res.status(200).json({ message: "Coinsslider deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteCoinsslider3 = async (req, res) => {
  const identifiers = req.body.identifiers;

  try {
    if (!identifiers || typeof identifiers !== 'object') {
      return res.status(400).json({ error: "Identifiers must be an object" });
    }

    const query = {};

    Object.entries(identifiers).forEach(([identifierType, identifierValue]) => {
      query[identifierType] = identifierValue;
    });

    const result = await Coinsslider3.findOneAndDelete(query);

    if (!result) {
      // If result is null, the hotlist with the specified identifier was not found
      return res.status(404).json({ error: "Coinsslider not found" });
    }

    res.status(200).json({ message: "Coinsslider deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCoinsslider1,
  createCoinsslider2,
  createCoinsslider3,
  getAllCoinsslider1,
  getAllCoinsslider2,
  getAllCoinsslider3,
  getSingleHotList,
  updateCoinsslider1,
  updateCoinsslider2,
  updateCoinsslider3,
  deleteCoinsslider1,
  deleteCoinsslider2,
  deleteCoinsslider3,
};