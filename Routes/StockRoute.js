const StockModel = require("../Models/StockModel");

const router = require("express").Router();

router.post("/stock", async (req, res) => {
  console.log(req.body);
  const response = await StockModel.create(req.body);
  console.log(response);
  try {
    res.status(200).json({
      status: "Success",
      msg: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failure",
      msg: error.message,
    });
  }
});

router.get("/stock", async (req, res) => {
  try {
    const response = await StockModel.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      status: "Success",
      msg: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failure",
      msg: error.message,
    });
  }
});

router.put("/stock", async (req, res) => {
  try {
    const response = await StockModel.findByIdAndUpdate(
      { _id: req.body._id },
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "Success",
      msg: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failure",
      msg: error.message,
    });
  }
});

module.exports = router;
