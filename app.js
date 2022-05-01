const { response } = require("express");
const express = require("express")
const https = require("https");
const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=15c39eba3d1061ab9a65bd144144b270&units=metric"
    https.get(url, function(response) {
        console.log(response);

    })

    res.send("server started")
})



app.listen(3000, function() {
    console.log("server staretd at port 3000")
})