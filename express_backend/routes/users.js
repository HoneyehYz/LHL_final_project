const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

module.exports = (db) => {
  // Create a new user
  router.post("/auth/register", async (req, res) => {
    const emailTaken = await getUserWithEmail(req.body.email);
    const usernameTaken = await getUserWithUsername(req.body.username);

    if (emailTaken) {
      return res.status(409).json({
        message: "Email already taken. Use a different one.",
      });
    } else if (usernameTaken) {
      return res.status(409).json({
        message: "Username already taken. Use a different one.",
      });
    } else {
      req.body.password = bcrypt.hashSync(req.body.password, 12);

      const text =
        "INSERT INTO users(username, password, email) VALUES($1, $2, $3)";
      const values = [req.body.username, req.body.password, req.body.email];

      db.query(text, values)
        .then(() => {
          res.status(201).json({
            message:
              "Registered successfully. You can now log into your account",
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({ message: "Could not create your account" });
        });
    }
  });

  router.post("/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await login(email, password);

      if (!user) {
        return res.status(401).json({ message: "Incorrect email or password" });
      } else {
        // req.session.userId = user.id;

        res.status(200).json({
          message: "Logged In successfully",
          user: { name: user.name, email: user.email, id: user.id },
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong while trying to sign in" });
    }
  });

  router.post("/logout", (req, res) => {
    req.session.userId = null;
    res.send({});
  });

  // Endpoint for retriving users
  router.get("/users", (req, res) => {
    const text = "SELECT id, username, email FROM users";

    db.query(text)
      .then(({ rows: users }) => {
        res.json({ message: "Users retrieved successfully", users });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Could not retrieve users" });
      });
  });

  const getUserWithEmail = function (email) {
    return db
      .query(
        `SELECT * FROM users
    WHERE email = $1`,
        [email]
      )
      .then((res) => res.rows[0])
      .catch((rej) => null);
  };

  exports.getUserWithEmail = getUserWithEmail;

  const getUserWithUsername = function (username) {
    return db
      .query(
        `SELECT * FROM users
    WHERE username = $1`,
        [username]
      )
      .then((res) => res.rows[0])
      .catch((rej) => null);
  };

  exports.getUserWithUsername = getUserWithUsername;

  /**
   * Check if a user exists with a given username and password
   * @param {String} email
   * @param {String} password encrypted
   */
  const login = function (email, password) {
    return getUserWithEmail(email).then((user) => {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          return user;
        } else {
          return null;
        }
      }
      return null;
    });
  };

  exports.login = login;

  return router;
};
