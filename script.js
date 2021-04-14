$(document).ready(function () {
  $("#currentDay").text(dayjs().format("MMMM D, YYYY"));

  console.log(dayjs().hour());
});
