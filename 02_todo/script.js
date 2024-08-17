const input = document.querySelector(".taskInput");
const button = document.querySelector(".but");
const task = document.querySelector(".tasks");

button.addEventListener("click", ()=>{
  const taskText = input.value;
  if(taskText.trim() !== ""){
    const newTask = document.createElement('li');
    newTask.className = "taskDiv"
    const img = document.createElement("img");
    img.className = "img";
    img.src = "images/unchecked.png";
    const done = document.createElement("img");
    done.className = "done";
    done.src = "images/done.png";
    const p = document.createElement("p");
    p.className = "task"
    p.innerText = taskText;
    newTask.appendChild(img);
    newTask.appendChild(p);
    newTask.appendChild(done);
    task.insertBefore(newTask, task.firstChild);
    input.value = "";
    saveData()
  }
})

task.addEventListener("click", (e) => {
  if (e.target.tagName === "P" && e.target.classList.contains("task")) {
    if(e.target.style.textDecoration == "line-through"){
      const parent = e.target.parentNode;
      const img = parent.querySelector(".img");
      img.src = "images/unchecked.png"
      e.target.style.textDecoration = "none";
      saveData()
    } else{
      const parent = e.target.parentNode;
      const img = parent.querySelector(".img");
      img.src = "images/checked.png"
      e.target.style.textDecoration = "line-through";
      saveData()
    }
  }
  if(e.target.tagName == "IMG" && e.target.classList.contains("done")){
    e.target.parentNode.remove();
    saveData();
  }
});

function saveData(){
  localStorage.setItem("data", task.innerHTML);
}
function showData(){
  task.innerHTML = localStorage.getItem("data");
}
showData();