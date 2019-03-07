// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
    // get route -> index
    app.get("/", function (req, res) {
        // send us to the next get function instead.
        res.redirect("/todos");
    });


    // GET route for getting all of the toDoItems
    app.get("/todos", function (req, res) {
        db.Todos.findAll()
            .then(function (dbToDo) {
                //console.log(dbToDo);
                // into the main index, updating the page
                var hbsObject = { todo: dbToDo };
                return res.render("index", hbsObject);
            });
    });



    // POST route for saving a new toDoItem
    app.post("/api/todos", function (req, res) {
        res.json(req.body);
        db.Todos.create({
            toDoItem: req.body.toDoItem,
            completed: req.body.completed
        })
            .then(function (dbToDo) {
                // res.json(dbToDo);
            });
    });

    // DELETE route for deleting toDoItems
    app.delete("/api/todos/:id", function (req, res) {
        db.Todos.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbToDo) {
                res.json(dbToDo);
            });
    });

    // PUT route for updating toDoItems
    app.put("/api/todos/:id", function (req, res) {
        console.log("route fired");
        db.Todos.update(req.body,
            {

                where: {
                    id: req.params.id
                }

            })
            .then(function (dbToDo) {
                res.json(dbToDo);
            });
    });
};