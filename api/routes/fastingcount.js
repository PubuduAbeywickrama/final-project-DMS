const router = require("express").Router();
const FastingCount = require("../models/FastingCount");
const { spawn } = require('child_process');
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

router.post('/addMessage', async (req, res) => {
  try {
    // Extract symptoms from the request body
    const { symptoms } = req.body;
    console.log(symptoms);

    // Run the Python script using spawn, passing symptoms as arguments
    const pythonProcess = spawn('python', ['./app_.py', symptoms]);

    // Collect data from the Python script
    let scriptOutput = '';

    // Handle data events from stdout
    pythonProcess.stdout.on('data', (data) => {
      scriptOutput += data.toString();
    });

    // Handle errors from stderr
    pythonProcess.stderr.on('data', (data) => {
      console.error('Python Script Error:', data.toString());
    });
    await new Promise((resolve) => {
      pythonProcess.on('close', (code) => {
        console.log('Python script execution completed with exit code:', code);
        console.log('Python script output:', scriptOutput);
    
        if (code === 0) {
          try {
            // Trim leading/trailing whitespaces from scriptOutput
            const trimmedOutput = scriptOutput.trim();
            // Send the response directly to the client
            res.status(200).send(trimmedOutput);
          } catch (parseError) {
            console.error('Error handling Python script output:', parseError);
            res.status(500).json({ message: 'Internal Server Error' });
          }
        } else {
          console.error('Python Script Error. Exit code:', code);
          res.status(500).json({ message: 'Internal Server Error' });
        }
    
        resolve();
      });
    });
  } catch (error) {
    console.error('Error running Python script:', error);
    res.status(500).json({ message: 'Internal Server Error' });
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
