const jwt = require('jsonwebtoken');

const verifySecretToken = (req, res, next) => {
  const secretToken = req.headers['x-secret-token'];

  if (!secretToken || secretToken !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ error: "Unauthorized - Invalid Secret Token" });
  }

  next();
};

module.exports = { verifySecretToken };
