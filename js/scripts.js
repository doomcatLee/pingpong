//Back-End Logic
var populateNumber = function(num) {
    var array = [];
    for (var i = 0; i <= num; i++) {
        array.push(i)
    }
    return array;
};

var replaceNumber = function(numArray) {
    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] % 15 === 0) {
            numArray.splice(i, 1, "ping-pong")
        } else if (numArray[i] % 5 === 0) {
            numArray.splice(i, 1, "pong")
        } else if (numArray[i] % 3 === 0) {
            numArray.splice(i, 1, "ping")
        } else {
            console.log("Do nothing")
        }
    }
    return numArray;
};


$(function() {
    $("#main").submit(function() {
        event.preventDefault();
        $("#main").hide();
        $("#content").show();
    });
    $("#input").submit(function() {
        event.preventDefault();

        var userInput = parseInt($("#enter").val());
        var result = replaceNumber(populateNumber(userInput));
        $("#output").append("<li>" + result + "</li>");

    }); //submit
}); //jQuery
