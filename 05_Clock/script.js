let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  
  let hrotate = 30*hours + mins/2 + secs/120;
  let mrotate = 6*mins + secs/10;
  let srotate = 6*secs;
  
  hourHand.style.transform = `rotate(${hrotate}deg)`;
  minuteHand.style.transform = `rotate(${mrotate}deg)`;
  secondHand.style.transform = `rotate(${srotate}deg)`;
}, 1000);