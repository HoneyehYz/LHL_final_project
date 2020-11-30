const router = require("express").Router();

module.exports = db => {
  router.get("/chats", (req, response) => {
    db.query(
      `
      SELECT
        id,
        message,
        date,
        fromUser,
        toUser
      FROM messages
    `
    ).then(({ rows: chats}) => {
      response.json(chats);
    });
  });
  router.post("/chat", (req, response) => {
    db.query(
      `
    INSERT messages(
        message,
        date,
        fromUser,
        toUser) 
        VALUES($1::string, $2::string, $3::string, $3::string)`[
          (req.message, req.date, req.fromUser, req.toUser)
        ]
    ).th   .then(() => {
      setTimeout(() => {
        response.status(204).json({});
      }, 1000);
    })
    .catch((error) => console.log(error));
  });



  return router;
};
