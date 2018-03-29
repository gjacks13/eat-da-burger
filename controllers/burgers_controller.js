const burger = require("../models/burger.js");

const router = function(app) {
  // Create all our routes and set up logic within those routes where required.
  app.get("/", function(req, res) {
    burger.all()
      .then((data) => {
        const hbsObject = {
          burgers: data
        };
        res.render("index", hbsObject);
      });
  });

  app.post("/api/burger", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, false])
      .then((data) => {
        res.json({ id: data.id });
      });
  });

  app.put("/api/burger", function(req, res) {
    const condition = "id = " + req.body.id;

    let updateObj = {
      devoured: true
    };

    burger.update(updateObj, condition)
      .then(data => {
        if (data.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      });
  });
}

// Export routes for server.js to use.
module.exports = router;