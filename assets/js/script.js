$(document).ready(function () {

    var today = moment();
    $("#currentDay").text(today.format("LLLL"));
    $(".saveBtn").on("click", function () {
        var textInput = $(this).siblings(".description").val();
        var timeInput = $(this).parent().attr("id");
        localStorage.setItem(timeInput, textInput);
    })
    
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    
    
    function startAgenda () {
       var currentTime = today.hours();
       $(".time-block").each(function () {
           var findTime = parseInt($(this).attr("id"));
           if (findTime < currentTime) {
               $(this).addClass("past");
           } else if (findTime === currentTime) {
               $(this).removeClass("past");
               $(this).removeClass("future");
               $(this).addClass("present");
           } else {
               $(this).removeClass("past");
               $(this).removeClass("present");
               $(this).addClass("future");
           }
       })
    }
    startAgenda ();
    })