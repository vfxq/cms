const config = require("./config");
const app = require("./app");
const database = require("./database");

const port = config.PORT;

database().then(info => {
  console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}).catch(() => {
  console.error("Unable connect to database");
  process.exist(1);
});
