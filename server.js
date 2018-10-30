// DEPENDENCIES
// =============================================
let express = require('express');
let path = require('path');

// SET UP EXPRESS APP
// =============================================
let app = express();
let PORT = process.env.PORT || 1337;

// SET UP EXPRESS TO HANDLE DATA PARSING
// =============================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
// =============================================

// Default route that leads to homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});


// START LISTENING
// =============================================
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT)
});