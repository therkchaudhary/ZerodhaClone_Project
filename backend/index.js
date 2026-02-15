require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/AuthRoute");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 4000;
const uri = process.env.MONGO_URL;

const app = express();

// --- CORRECTION 1: CORS Options for Production ---
const corsOptions = {
  origin: [
    "http://localhost:3000", 
    "http://localhost:3001",
    "https://zerodhaclone-project.onrender.com",  // Apne live frontend ka URL daalein
    "https://zerodhaclone-dashboard-gzx3.onrender.com"  // Apne live dashboard ka URL daalein
  ],
  credentials: true, 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// Logging middleware (Debugging ke liye helpful hai)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save(); // CORRECTION 2: await use karein
    res.send("Order saved!");
  } catch (err) {
    res.status(500).send("Error saving order");
  }
});

// Database Connection
mongoose.connect(uri)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });