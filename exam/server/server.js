const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors()); // middleware to prevent CORS errors
// CORS - cross origin resource sharing
app.use(express.json()); // we need this to properly collect form data from the req
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/project.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));


