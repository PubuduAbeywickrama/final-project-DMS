const router = require("express").Router();
const FastingCount = require("../models/FastingCount");

// data add to database
router.post("/addFasting", async (req, res) => {
  try {
    const { user,sugarcount, date } = req.body;

    if (!user || !sugarcount || !date) {
      return res.status(400).json({ error: "Please provide all required fields." });
    }

    const newFasting = new FastingCount({
      userid: user,
      sugarcount: sugarcount,
      date: date,
      
    });

    const savedFastingCount = await newFasting.save();

    res.status(200).json(savedFastingCount);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getFastingCounts/:userId", async (req, res) => {
    try {
      const randomCounts = await FastingCount.find({ userid: req.params.userId });
      res.status(200).json(randomCounts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;
