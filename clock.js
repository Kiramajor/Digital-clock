let display = document.querySelector(".clock");
let dateShow = document.querySelector(".date-show");
let body = document.querySelector("body");

myInterval = setInterval(myClock, 1000);
function myClock() {
  let date = new Date();
  let timeOfDay = "AM";
  let hr = date.getHours().toString().padStart(2, "0");
  if (hr >= 12) {
    hr -= 12;
    timeOfDay = "PM";
  } else if (hr === 0) {
    hr = 12;
    timeOfDay = "AM";
  }

  let min = date.getMinutes().toString().padStart(2, "0");
  let sec = date.getSeconds().toString().padStart(2, "0");

  const timeString = `${hr}: ${min}: ${sec}${timeOfDay}`;
  display.innerHTML = timeString;
}
myClock();

dateInterval = setInterval(myDate, 3600000);
function myDate() {
  let today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentDay = today.getDay().toString();
  let currentMonth = today.getMonth().toString();
  let date = today.getDate().toString();
  let year = today.getFullYear().toString();

  const dateString = `${days[currentDay]}:${date}:${months[currentMonth]}:${year}`;
  dateShow.innerHTML = dateString;
}
myDate();



let i = 0;
let colors = ['rgb(153, 145, 145)','grey', 'rgb(107, 104, 104)','rgb(107, 114, 114)','rgb(70, 66, 66)','rgb(40, 37, 37)','black','rgb(153, 145, 145)','rgb(118, 82, 82)', 'rgb(187, 161, 161)', 'grey'];

setTimeout(chgBck, 1000);
// setInterval(chgBck, 2500);
function chgBck() {
  body.style.backgroundColor = colors[i];
  if (i < colors.length) {
    i++;
  } else {
    i = 0;
  }
}
chgBck();
