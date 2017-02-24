//Back-End Logic

//Given a number, make an array of numbers from zero to number
var populateNumber = function(num) {
    var array = [];
    for (var i = 0; i <= num; i++) {
        array.push(i)
    }
    return array;
};
//Given array of numbers, replace certain numbers with words based on their logic
var replaceNumber = function(numArray) {
    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] % 15 === 0) {
            numArray.splice(i, 1, "Ping Pong")
        } else if (numArray[i] % 5 === 0) {
            numArray.splice(i, 1, "Pong")
        } else if (numArray[i] % 3 === 0) {
            numArray.splice(i, 1, "Ping")
        } else {
            console.log("leave the number")
        }
    }
    return numArray;
};
//Given array and tag name for output, prints list of arrays in html
var displayToList = function(array, target) {
    for (var i = 0; i < array.length; i++) {
        $("#" + target).append("<li style='display: none;'>" + array[i] + "</li>");
    }
};
//Validate user input if less than zero throw an alert
var validateInput = function(userInput) {
    if (userInput < 0) {
        alert("Please enter a number bigger than zero")
    } else {
        return userInput;
    }
};
//Front-end Logic
$(function() {
    $("#main").submit(function() {
        event.preventDefault();
        $("#main").hide();
        $("#content").fadeIn(700);
    });
    $("#input").submit(function() {
        event.preventDefault();
        var userInput = validateInput(parseInt($("#enter").val()));
        var resultArray = replaceNumber(populateNumber(userInput));
        displayToList(resultArray, "output");
        //Display each hidden list with fade
        (function() {
            var a = $('#output').children();
            var index = 0;
            run()

            function run() {
                a.filter('.active').fadeOut(300).removeClass('active');
                a.eq(index).fadeIn(300).addClass('active');
                index = (index + 1) % a.length; // Wraps around if it hits the end
                setTimeout(run, 600);
            }
        })(); //run()
    }); //submit
}); //jQuery
