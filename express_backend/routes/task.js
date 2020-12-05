const router = require("express").Router();

module.exports = (db) => {
  // Endpoint for retriving tasks
  router.get("/task", async (req, res) => {
    try {
      const text =
        "SELECT id, user_id, task, score, score_date, completed FROM tasks";
      const tasks = await db.query(text);

      return res
        .status(200)
        .json({
          message: "Tasks retrieved successfully",
          tasks: tasks.rows,
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not retrieve tasks" });
    }
  });

  // Endpoit for creating a task
  router.post("/task", async (req, res) => {
    try {
      const text =
        "INSERT INTO tasks(user_id, task) VALUES($1, $2) RETURNING *";
      const values = [
        req.body.userId,
        req.body.task,
      ];

      const task = await db.query(text, values);

      res
        .status(201)
        .json({
          message: "Task created successfully",
          task: task.rows[0],
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not create the task" });
    }
  });

  return router;
};
