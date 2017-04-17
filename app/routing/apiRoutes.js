// DEPENDENCIES
var path = require("path");

var tableData = require(path.join(__dirname, "../data/friendsData"));




module.exports = function(app) {
    // API GET Requests

    // ---------------------------------------------------------------------------
    app.get("/api/friends", function(req, res) {
        res.json(tableData);




    });

    // API POST Requests

    // ---------------------------------------------------------------------------
    app.post("/api/friends", function(req, res) {

        // FIND BEST MATCH
        var userInput = req.body;

        var userScores = userInput.scores;



        var matchWinner = [];



        for (i = 0; i < tableData.length; i++) {

            var compare = tableData[i].scores
            var totalDiff = 0;


            for (x = 0; x < compare.length; x++) {

                if (userScores[x] > compare[x]) {

                    totalDiff += (userScores[x] - compare[x]);

                } else {

                    totalDiff += (compare[x] - userScores[x]);

                }



            }
            // BUILD ARRAY OF DIFFERNCES

            matchWinner.push(totalDiff);

        }


        console.log(matchWinner);

        var winner = Math.min.apply(Math, matchWinner);
        var chrIndex = matchWinner.indexOf(winner);

        console.log(chrIndex);

        tableData.push(req.body);
        res.json(tableData[chrIndex]);




    });

};