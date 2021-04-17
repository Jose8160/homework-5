$(document).ready(function () {
  $("#currentDay").text(dayjs().format("MMMM D, YYYY"));

  console.log(dayjs().hour());
});

var objDate = new Date();
    var hours = objDate.getHours();
    if(hours >= 9 && hours <= 17){
        $(".description").addClass("present");
    }
    else if(hours < 9){
        $(".description").addClass("past");
    }
    else{
        $(".description").addClass("future");
    }

