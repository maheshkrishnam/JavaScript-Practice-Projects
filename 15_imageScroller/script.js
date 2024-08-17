const moveL = document.querySelector("#moveL");
const moveR = document.querySelector("#moveR");
const gallery = document.querySelector(".container");

gallery.addEventListener('wheel', (e)=>{
  e.preventDefault();
  gallery.scrollLeft += e.deltaY;
});

moveR.addEventListener('click', (e)=>{
  gallery.style.scrollBehavior = "smooth";
  gallery.scrollLeft = 660;
})

moveL.addEventListener('click', (e)=>{
  gallery.style.scrollBehavior = "smooth";
  gallery.scrollLeft = -660;
})