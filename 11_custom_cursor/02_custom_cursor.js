const cursor = document.querySelector('.cursor');
const main = document.querySelector('.main');

main.addEventListener("mousemove", function(event){
  console.log(event);
  cursor.style.left = event.x + 'px';
  cursor.style.top = event.y + 'px';
})