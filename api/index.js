const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { UploadData } = require("./src/controllers/uploadData");
const PORT = process.env.DB_PORT;

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
  await UploadData();
});
