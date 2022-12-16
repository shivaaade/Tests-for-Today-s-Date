const express = require("express");
const apps = express();

apps.get("/", (request, response) => {
  let date = new Date();
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});

let date = new Date();
console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);

module.exports = apps;

// const express = require("express");

// const app = express();

// app.get("/", (request, response) => {
//   const dateTime = new Date();

//   response.send(
//     `${dateTime.getDate()}-${dateTime.getMonth() + 1}-${dateTime.getFullYear()}`
//   );
// });

// module.exports = app;
