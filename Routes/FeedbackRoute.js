const FeedbackModal = require("../Models/FeedbackModal");

const router = require("express").Router();

router.post("/feedback", async (req, res) => {
  try {
    const response = await FeedbackModal.create(req.body);
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

router.get("/feedback", async (req, res) => {
  try {
    const response = await FeedbackModal.find({}).sort({ createdAt: -1 });
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
