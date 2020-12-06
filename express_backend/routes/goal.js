const router = require("express").Router();

module.exports = (db) => {
  // Endpoint for retriving goals
  router.get("/goals", async (req, res) => {
    try {
      const text =
        "SELECT id, user_id, goal, deadline, milestone_id FROM goals";
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
        "INSERT INTO goals(user_id, goal, deadline, milestone_id) VALUES($1, $2, $3, $4) RETURNING *";
      const values = [
        req.body.userId,
        req.body.goal,
        req.body.deadline,
        req.body.milestoneId,
      ];

      const goal = await db.query(text, values);

      res
        .status(201)
        .json({ message: "Goal created successfully", goal: goal.rows[0] });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not create the goal" });
    }
  });

  return router;
};
