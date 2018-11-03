//DEPENDENCIES
var path = require('path');
var friendsInfo = require("../data/friends.js");

//ROUTES
module.exports = function(app) {

    //API GET ROUTE FOR FRIENDS.JS    
    app.get("/api/friends", function(req, res) {
        res.json(friendsInfo)
    });
}