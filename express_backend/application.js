const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const db = require("./db");
const category = require("./routes/category");
const chat = require("./routes/chat");
const user = require("./routes/users");
const goal = require("./routes/goal");
const milestone = require("./routes/milestone");
const task = require("./routes/task");

const app = express();

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8",
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(ENV) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  app.use("/api/v1", category(db));
  app.use("/api/v1", chat(db));
  app.use("/api/v1", user(db));
  app.use("/api/v1", goal(db));
  app.use("/api/v1", milestone(db));
  app.use("/api/v1", task(db));

  if (ENV === "development" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`)),
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).json({ message: "Database Reset" });
            });
        });
      })
      .catch((error) => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function () {
    return db.end();
  };

  return app;
};
