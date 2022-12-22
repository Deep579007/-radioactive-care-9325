const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const authConnection = require("./dataBase/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const { notFound, errorHandler } = require("./MiddleWares/errorMiddleWare");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("FROM HOME");
});
const PORT = 8085;
// app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);

authConnection();

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server Runnig On http://localhost:${PORT}`);
});