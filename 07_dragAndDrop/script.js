const elements = document.querySelectorAll(".element");
const rightBox = document.querySelector(".right");
const leftBox = document.querySelector(".left");

elements.forEach((element)=>{
  element.addEventListener('dragstart', (e)=>{
    let selected = e.target;
    rightBox.addEventListener('dragover', (e)=>{
      e.preventDefault();
    })
    rightBox.addEventListener('drop', (e)=>{
      rightBox.appendChild(selected);
      selected = null;
    })

    leftBox.addEventListener('dragover', (e)=>{
      e.preventDefault();
    })
    leftBox.addEventListener('drop', (e)=>{
      leftBox.appendChild(selected);
      selected = null;
    })
  })
})