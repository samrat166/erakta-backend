const DonorModal = require("../Models/DonorModal");

const router = require("express").Router();

router.post("/donation", async (req, res) => {
  try {
    const donor = await DonorModal.findOne({
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
    });
    if (donor) {
      res.status(200).json({
        status: "Failure",
        msg: "Donor Exists",
      });
    } else {
      const response = await DonorModal.create(req.body);
      res.status(200).json({
        status: "Success",
        msg: response,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Failure",
      msg: error.message,
    });
  }
});
router.delete("/donations/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await DonorModal.findByIdAndRemove({ _id: id });
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

router.get("/all/donations", async (req, res) => {
  const response = await DonorModal.find({}).sort({ createdAt: -1 });
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

router.get("/donations/:group", async (req, res) => {
  const { group } = req.params;
  const response = await DonorModal.find({ bloodGroup: group }).sort({
    createdAt: -1,
  });
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

router.get("/find/:id", async (req, res) => {
  const { id } = req.params;
  const response = await DonorModal.findById({ _id: id }).sort({
    createdAt: -1,
  });
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

router.get("/find/address/group/:bloodGroup/:address", async (req, res) => {
  const { bloodGroup, address } = req.params;
  console.log(bloodGroup, address);
  const Regex1 = new RegExp(address, "i");
  const Regex2 = new RegExp(bloodGroup, "i");
  try {
    const response = await DonorModal.find({
      $and: [{ address: Regex1 }, { bloodGroup: Regex2 }],
    });
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
