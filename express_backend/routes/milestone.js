const router = require("express").Router();

module.exports = (db) => {
  // Endpoint for retriving milestones
  router.get("/milestone", async (req, res) => {
    try {
      let text;
      const userId = req.query.userId;

      if (userId) {
        text = `SELECT id, user_id, goal_id, milestone, deadline, completed_at FROM milestones WHERE user_id = ${userId}`;
      } else {
        text =
          "SELECT id, user_id, goal_id, milestone, deadline, completed_at FROM milestones";
      }

      const milestones = await db.query(text);

      return res.status(200).json({
        message: "Milestones retrieved successfully",
        milestones: milestones.rows,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not retrieve milestones" });
    }
  });

  // Endpoit for creating a milestone
  router.post("/milestone", async (req, res) => {
    try {
      const text =
        "INSERT INTO milestones(user_id, goal_id, milestone, deadline, completed_at) VALUES($1, $2, $3, $4, $5) RETURNING *";
      const values = [
        req.body.userId,
        req.body.goalId,
        req.body.milestone,
        req.body.deadline,
        req.body.completedAt,
      ];

      const milestone = await db.query(text, values);

      res.status(201).json({
        message: "Milestone created successfully",
        milestone: milestone.rows[0],
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not create the milestone" });
    }
  });

  return router;
};
