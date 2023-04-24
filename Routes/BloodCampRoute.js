const bloodCampModal = require("../Models/bloodCampModal");

const router = require("express").Router();

router.post("/blood-camp", async (req, res) => {
  const response = await bloodCampModal.create(req.body);
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

router.get("/blood-camp", async (req, res) => {
  try {
    const response = await bloodCampModal.find({}).sort({ createdAt: -1 });
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

router.put("/blood-camp", async (req, res) => {
  try {
    const response = await bloodCampModal.findByIdAndUpdate(
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

router.delete("/blood-camp/:id", async (req, res) => {
  const { id } = req.params;
  const response = await bloodCampModal.findByIdAndRemove({ _id: id });
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
