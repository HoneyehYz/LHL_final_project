const router = require("express").Router();

module.exports = (db) => {
  // Endpoint for retriving goals
  router.get("/goals", (request, response) => {
    db.query(
      `
      SELECT
      id, user_id, goal, deadline, milestone_id
      FROM goals
    `
    )
      .then(({ rows: goals }) => {
        response.json({ message: "Goals retrieved successfully", goals });
      })
      .catch((error) => console.log(error));
  });

  // Endpoit for creating a goal
  router.post("/goals", (req, res) => {
    const text = "INSERT INTO goals(user_id, goal, deadline, milestone_id) VALUES($1, $2, $3, $4) RETURNING *";
    const values = [req.body.userId, req.body.goal, req.body.deadline, req.body.milestoneId];

    db.query(text, values)
      .then((data) => {
        res.status(201).json({ message: "Goal created successfully", goal: data.rows[0] });
      })
      .catch((error) => { 
        console.log(error)
        res.status(500).json({ message: "Could not create the goal"});
      });
  });

  return router;
};
