const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes")
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);

mongoose.connect("mongodb+srv://Mehak20:Mehak2003@cluster0.dzqktd9.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected To Database at port 5000"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));