
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


function countdown(){
  const newYear = new Date('1 Jan 2022');
  const currentDate = new Date();
  const totalSecs = (newYear - currentDate) / 1000;
  const days = Math.floor(totalSecs / 3600 / 24);
  const hoursRem = Math.floor((totalSecs / 3600) % 24);
  const minsRem = Math.floor((totalSecs / 60) % 60);
  const secsRem = Math.floor(totalSecs % 60);

  daysEl.innerHTML = formattedNum(days);
  hoursEl.innerHTML = formattedNum(hoursRem);
  minutesEl.innerHTML = formattedNum(minsRem);
  secondsEl.innerHTML = formattedNum(secsRem);
}
 
const formattedNum = num => num < 10 ? `0${num}` : num ;
setInterval(countdown,1000);
