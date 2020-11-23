const express = require('express');
const router = express.Router();



  // Create a new user
  router.post('/', (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    db.query(`INSERT INTO users(username, password, email) VALUES($1::string, $2::string, $3::string)` [req.username, password, req.email]).then(() => {
      setTimeout(() => {
        response.status(204).json({});
      }, 1000);
    })
    .catch(error => console.log(error));
  });

  /**
   * Check if a user exists with a given username and password
   * @param {String} email
   * @param {String} password encrypted
   */
  const login =  function(email, password) {
    return getUserWithEmail(email)
    .then(user => {
      if (bcrypt.compareSync(password, user.password)) {
        return user;
      }
      return null;
    });
  }
  exports.login = login;

  router.post('/login', (req, res) => {
    const {email, password} = req.body;
    login(email, password)
      .then(user => {
        if (!user) {
          res.send({error: "error"});
          return;
        }
        req.session.userId = user.id;
        res.send({user: {name: user.name, email: user.email, id: user.id}});
      })
      .catch(e => res.send(e));
  });
  
  const getUserWithEmail = function(email) {
    return db.query(`SELECT * FROM users
    WHERE email = $1`, [email])
    .then(res => res.rows[0])
    .catch(rej => null);
  }
  exports.getUserWithEmail = getUserWithEmail;
  router.post('/logout', (req, res) => {
    req.session.userId = null;
    res.send({});
  });

module.exports = router;
