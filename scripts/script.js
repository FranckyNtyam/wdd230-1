let day = new Date();
let year = day.getFullYear();
let time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
let date = day.getDate() + "/" + day.getMonth() + "/" + day.getFullYear();
document.getElementById('year').innerHTML = year;
document.getElementById('current-date').innerHTML = date + " " + time;