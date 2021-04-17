$(document).ready(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  // console.log(dayjs().hour());
});

var objDate = new Date();
var hours = objDate.getHours();
if (hours === 9-17 ) {
  $(".description").addClass("present");
} else if (hours > 9-17) {
  $(".description").addClass("past");
} else {
  $(".description").addClass("future");
}


var storage = [];
    document.querySelectorAll('.saveBtn').forEach(item => {
        item.addEventListener('click', event => {
            var button = event.target;
            var parent = button.closest("div.row");
            var id = parent.id;
            var textContent = parent.querySelector("textarea").value;
            storage[id] =  textContent;
            localStorage.setItem("storage", JSON.stringify(storage));
        });
    })



