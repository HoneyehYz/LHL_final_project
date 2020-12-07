const router = require("express").Router();

module.exports = (db) => {
  // Endpoint for retriving goals
  router.get("/goals", async (req, res) => {
    try {
      let text;
      const userId = req.query.userId;

      if (userId) {
        text = `SELECT id, user_id, goal, deadline FROM goals WHERE user_id = ${userId}`;
      } else {
        text = "SELECT id, user_id, goal, deadline FROM goals";
      }

      const goals = await db.query(text);

      return res
        .status(200)
        .json({ message: "Goals retrieved successfully", goals: goals.rows });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not retrieve goals" });
    }
  });

  // Endpoit for creating a goal
  router.post("/goals", async (req, res) => {
    try {
      const text =
        "INSERT INTO goals(user_id, goal, deadline) VALUES($1, $2, $3) RETURNING *";
      const values = [req.body.userId, req.body.goal, req.body.deadline];

      const goal = await db.query(text, values);

      res
        .status(201)
        .json({ message: "Goal created successfully", goal: goal.rows[0] });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not create the goal" });
    }
  });

  // Endpoint for deleting a specific user's goal
  router.delete("/goal/:id", async (req, res) => {
    try {
      const userId = req.query.userId;
      const goalId = req.params.id;

      const text_1 = `SELECT * FROM goals WHERE id = ${goalId} AND user_id = ${userId}`;
      
      const goalFound = await db.query(text_1);

      if (goalFound.rows[0]) {
        const text_2 = `DELETE FROM goals WHERE id = ${goalId} AND user_id = ${userId}`;

        await db.query(text_2);

        return res.status(200).json({ message: "Goal deleted successfully" });
      } else {
        return res.status(404).json({ message: "Goal not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not delete  the goal" });
    }
  });

  return router;
};
