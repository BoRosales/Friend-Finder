//DEPENDENCIES
let path = require('path');
let friends = require("../data/friends.js");

//ROUTES
module.exports = function(app) {

    //API GET ROUTE FOR FRIENDS.JS    
    app.get("/api/friends", function(req, res) {
        res.json(friendsInfo)
    });

    app.post("/api/friends", function(req, res){

        let newFriend = req.body;

        console.log(newFriend);

        friends.push(newFriend);

        res.json(newFriend);
    });
}