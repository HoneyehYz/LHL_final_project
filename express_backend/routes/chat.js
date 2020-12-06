const router = require("express").Router();

module.exports = (db) => {
  // Endpoint for retriving chat message
  router.get("/chat", async (req, res) => {
    try {
      const text =
        "SELECT id, message, message, fromUser, toUser FROM messages";
      const chats = await db.query(text);

      return res.status(200).json({
        message: "Chat messsages retrieved successfully",
        chats: chats.rows,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not retrieve chat messages" });
    }
  });

  // Endpoit for creating a chat message
  router.post("/chat", async (req, res) => {
    try {
      const text =
        "INSERT INTO messages(message, date, fromUser, toUser) VALUES($1, $2, $3, $4) RETURNING *";
      const values = [
        req.body.message,
        req.body.date,
        req.body.fromUser,
        req.body.toUser,
      ];

      const chat = await db.query(text, values);

      res.status(201).json({
        message: "chat message created successfully",
        chat: chat.rows[0],
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not create the chat message" });
    }
  });

  return router;
};
