const router = require("express").Router();

module.exports = db => {
  router.get("/categories", (request, response) => {
    db.query(
      `
      SELECT
        id,
        name
      FROM categories
    `
    ).then(({ rows: categories}) => {
      response.json(categories);
    });
  });
  router.post("/categories", (req, response) => {
    db.query(
      `
    INSERT categories(
        name
        VALUES($1::string)`[
          (req.name)
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
