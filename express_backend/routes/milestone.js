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

  // Endpoint for deleting a specific user's milestone
  router.delete("/milestone/:id", async (req, res) => {
    try {
      const userId = req.query.userId;
      const milestoneId = req.params.id;

      const text_1 = `SELECT * FROM milestones WHERE id = ${milestoneId} AND user_id = ${userId}`;

      const milestoneFound = await db.query(text_1);

      if (milestoneFound.rows[0]) {
        const text_2 = `DELETE FROM milestones WHERE id = ${milestoneId} AND user_id = ${userId}`;

        await db.query(text_2);

        return res
          .status(200)
          .json({ message: "Milestone deleted successfully" });
      } else {
        return res.status(404).json({ message: "Milestone not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not delete  the milestone" });
    }
  });

  // Endpoint for updating a specific user's milestone
  router.patch("/milestone/:id", async (req, res) => {
    try {
      const userId = req.query.userId;
      const milestoneId = req.params.id;
      const milestone = req.body.milestone;
      const deadline = req.body.deadline;
      const completedAt = req.body.completedAt;

      const text_1 = `SELECT * FROM milestones WHERE id = ${milestoneId} AND user_id = ${userId}`;

      const milestoneFound = await db.query(text_1);

      if (milestoneFound.rows[0]) {
        const text_2 =
          "UPDATE milestones SET milestone = $1, deadline = $2, completed_at = $3 WHERE id = $4 AND user_id = $5 RETURNING *";
        const values = [milestone, deadline, completedAt, milestoneId, userId];

        const updatedMilestone = await db.query(text_2, values);

        return res
          .status(200)
          .json({
            message: "Milestone updated successfully",
            milestone: updatedMilestone.rows[0],
          });
      } else {
        return res.status(404).json({ message: "Milestone not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not update the milestone" });
    }
  });

  return router;
};
