module.exports = function (app) {



    // index route 
    app.get("/", function (req, res) {
        res.render("index");
    });


};