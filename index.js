const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const cron = require("node-cron");
const mongoose = require("mongoose");
const productRouter = require("./routes/ProductRoutes");
const productController = require("./controllers/ProductController");

// cron.schedule("*/5 * * * * *",()=>{{console.log('test data generator for weight link on '+ new Date());}})

cron.schedule("*/5 * * * * *", function (req, res) {
  insertProduct();
});

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/weight_sensor_db_test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

function insertProduct() {
    var req = { name: 'Party',unit:'Kg', createdAt: new Date(), updatedAt: new Date()};
    productController.createProductAuto(req);
}

function deleteProduct() {
  try {
    
    productController.delAllProduct();
  } catch (error) {
    console.log(error.message);
  }
}

app.use(bodyParser.json());
app.use("/api/products", productRouter);
app.listen(2400, () => {
  console.log("Server started at port 2400");
});

module.exports = app;
