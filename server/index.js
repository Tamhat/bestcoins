require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const app = express();
const port = process.env.PORT || 5000;


//bestcoins routes
const bannersRouter = require('./routes/banners.routes')
const hotListRouter = require('./routes/hotList.routes')
const newcoinsListRouter = require('./routes/newcoins.routes')
const topgainersListRouter = require('./routes/topgainers.routes')


// Middleware
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Database Connect
connectDB();


//Bestcoins Bypassed apis
app.use('/api/v1/banners', bannersRouter)
app.use('/api/v1/hotlists', hotListRouter)
app.use('/api/v1/newcoins', newcoinsListRouter)
app.use('/api/v1/topgainers', topgainersListRouter)


app.get("/", (req, res) => {
  res.send("Bestcoins Is Running");
});

app.listen(port, () => {
  console.log(`Bestcoins is Running On Port http://localhost:${port}`);
});