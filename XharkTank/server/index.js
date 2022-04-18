const express = require("express");
const cors = require("cors");

const pitchesRoute =require('./routes/pitchesRoute');

const app = express();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());

// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', pitchesRoute);

const PORT = 8081;
app.listen(8081, () => {
  console.log(`Server is running on port ${PORT}.`);
});

