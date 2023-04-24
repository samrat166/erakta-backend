const RequestModel = require("../Models/RequestModel");
const { sendMail } = require("../Helper/Mail");

const router = require("express").Router();

router.post("/blood-request", async (req, res) => {
  const response = await RequestModel.create(req.body);
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

router.get("/blood-request", async (req, res) => {
  const response = await RequestModel.find({}).sort({ createdAt: -1 });
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

router.put("/blood-request", async (req, res) => {
  const user = await RequestModel.findById({ _id: req.body._id });
  try {
    const response = await RequestModel.findByIdAndUpdate(
      { _id: req.body._id },
      { ...req.body },
      { new: true, runValidators: true }
    );
    sendMail(user.email, user.bloodGroup, req.body.status);
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
router.delete("/blood-request/:id", async (req, res) => {
  const { id } = req.params;
  const response = await RequestModel.findByIdAndRemove({ _id: id });
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

module.exports = router;
