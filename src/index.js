const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server = config.mongoose.url;

// CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
mongoose
  .connect(server)
  .then(() => console.log("Connected to MongoDB at", server))
  .catch(() => console.log("Failed to connect MonogoDB at", server));

// Listen to mongodb port for express application
app.listen(config.port, () => {
  console.log("Listening on", config.port);
});
