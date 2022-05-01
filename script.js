let btn = document.getElementById("btn");
btn.addEventListener("click", getdate);
let createdDate = "";

function getdate() {
  let setDate = document.getElementById("setDate");
  if (setDate.value == "") {
    console.log("please give me input");
    alert('Please enter date in the field')
  } else {
    createdDate = setDate.value;
    f();
    setInterval(f, 1000);
    setDate.value = "";
  }
}

function f() {
  let newCreatedDate = new Date(createdDate);
  let date = new Date();
  let totalSeconds = (newCreatedDate - date) / 1000;
  let days = Math.floor(totalSeconds / 3600 / 24);
  let hours = Math.floor(totalSeconds / 3600) % 24;
  let mins = Math.floor(totalSeconds / 60) % 60;
  let sec = Math.floor(totalSeconds % 60);

  let day = document.getElementById("days");
  let hour = document.getElementById("hours");
  let min = document.getElementById("mins");
  let secs = document.getElementById("sec");
  function setZero(time) {
    return time < 10 ? `0${time}` : time;
  }
  day.innerHTML = setZero(days);
  hour.innerHTML = setZero(hours);
  min.innerHTML = setZero(mins);
  secs.innerHTML = setZero(sec);
 
}
console.log('Developed by AbdulRehman');