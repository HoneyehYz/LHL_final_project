const router = require("express").Router();

module.exports = (db) => {
  // Endpoint for retriving tasks
  router.get("/task", async (req, res) => {
    try {
      let text;
      const userId = req.query.userId;

      if (userId) {
        text = `SELECT id, user_id, task, score, score_date, completed FROM tasks WHERE user_id = ${userId}`;
      } else {
        text =
          "SELECT id, user_id, task, score, score_date, completed FROM tasks";
      }
      const tasks = await db.query(text);

      return res.status(200).json({
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
      const values = [req.body.userId, req.body.task];

      const task = await db.query(text, values);

      res.status(201).json({
        message: "Task created successfully",
        task: task.rows[0],
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not create the task" });
    }
  });

  // Endpoint for deleting a specific user's task
  router.delete("/task/:id", async (req, res) => {
    try {
      const userId = req.query.userId;
      const taskId = req.params.id;

      const text_1 = `SELECT * FROM tasks WHERE id = ${taskId} AND user_id = ${userId}`;

      const goalFound = await db.query(text_1);

      if (goalFound.rows[0]) {
        if (goalFound.rows[0].completed === false) {
          const text_2 = `DELETE FROM tasks WHERE id = ${taskId} AND user_id = ${userId}`;

          await db.query(text_2);

          return res.status(200).json({ message: "Task deleted successfully" });
        } else {
          return res.status(403).json({
            message:
              "You cannot delete a completed task. It is now a score report.",
          });
        }
      } else {
        return res.status(404).json({ message: "Task not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not delete  the task" });
    }
  });

  // Endpoint for scoring a specific user's task
  router.patch("/task/:id", async (req, res) => {
    try {
      const userId = req.query.userId;
      const taskId = req.params.id;
      const score = req.body.score;
      const completed = req.body.completed;
      const score_date = req.body.score_date;

      const text_1 = `SELECT * FROM tasks WHERE id = ${taskId} AND user_id = ${userId}`;

      const goalFound = await db.query(text_1);

      if (goalFound.rows[0]) {
        const text_2 =
          "UPDATE tasks SET completed = $1, score = $2, score_date = $3 WHERE id = $4 AND user_id = $5 RETURNING *";
        const values = [completed, score, score_date, taskId, userId];

        const task = await db.query(text_2, values);

        return res
          .status(200)
          .json({ message: "Task scored successfully", task: task.rows[0] });
      } else {
        return res.status(404).json({ message: "Task not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not score  the task" });
    }
  });

  return router;
};
