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
            numArray.splice(i, 1, "ping pong")
        } else if (numArray[i] % 5 === 0) {
            numArray.splice(i, 1, "pong")
        } else if (numArray[i] % 3 === 0) {
            numArray.splice(i, 1, "ping")
        } else {
            console.log("do nothing")
        }
    }
    return numArray;
};

//Front-end Logic
$(function() {
    $("#main").submit(function() {
        event.preventDefault();
        $("#main").hide();
        $("#content").show();
    });
    $("#input").submit(function() {
        event.preventDefault();

        var userInput = parseInt($("#enter").val());
        var resultArray = replaceNumber(populateNumber(userInput));
        for (var i = 0; i < resultArray.length; i++) {
            $("#output").append("<li style='display: none;'>" + resultArray[i] + "</li>");
        } //forLoop
        //Display each hidden list with fade
        (function() {
            var a = $('#output').children();
            var index = 0;
            run()

            function run() {
                a.filter('.active').fadeOut(500).removeClass('active');
                a.eq(index).fadeIn(500).addClass('active');
                index = (index + 1) % a.length; // Wraps around if it hits the end
                setTimeout(run, 1000);
            }
        })(); //run()
    }); //submit
}); //jQuery
