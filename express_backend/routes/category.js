const router = require("express").Router();

module.exports = (db) => {

  // Endpoint for  retrieving categories
  router.get("/categories", (request, response) => {
    db.query(
      `
      SELECT
        id,
        name
      FROM categories
    `
    )
      .then(({ rows: categories }) => {
        response.json({
          message: "Categories retrieved successfully",
          categories,
        });
      })
      .catch((error) => console.log(error));
  });


// Endpoint for creating category
  router.post("/categories", (req, res) => {
    const text = "INSERT INTO categories(name) VALUES($1) RETURNING *";
    const values = [req.body.name];

    db.query(text, values)
      .then((data) => {
        res.status(201).json({ message: "Category created successfully", category: data.rows[0] });
      })
      .catch((error) => { 
        console.log(error)
        res.status(500).json({ message: "Could not create the category"});
      });
  });

  return router;
};
