const app = require("./startup/app");

// listen to the port
const port = 27017;
const server = app.listen(port, () => {
  console.log(`Server started and is listenning on port ${port}`);
});
