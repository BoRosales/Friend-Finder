// DISPLAYS ALL THE FRIENDS
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

// CREATES NEW FRIENDS
app.post("/api/friends", function(req, res) {

    let newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);

});