const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});

router
  .route("/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "changed" });
    res.json({ status: "Success" });
  })
  .delete((req, res) => {
    res.json({ status: "Pending" });
  });

router.post("/", async (req, res) => {
  const body = req.body;

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  return res.status(201).json({ msg: "success" });
});

module.exports = router;
