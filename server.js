require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const portfolioRoutes = require("./routes/portfolioRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/josephAntoPortfolio";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use("/", portfolioRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).render("error", {
    title: "Something went wrong",
    message: "The portfolio could not be loaded. Check the server and MongoDB connection."
  });
});

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Joseph Anto's portfolio is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
}

startServer();
