const notesCont = document.querySelector(".notesContainer");
const button = document.querySelector(".but");
const remove = document.querySelector(".delete");

document.addEventListener('keydown', (e)=>{
  if(e.key == "Enter"){
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
})

button.addEventListener('click', ()=>{
  const newNotes = document.createElement("p");
  newNotes.className = "inputBox";
  newNotes.setAttribute("contenteditable", "true")
  const image = document.createElement("img");
  image.src = "images/delete.png";
  image.className = "delete";
  newNotes.appendChild(image);
  notesCont.appendChild(newNotes);
  saveData();
})

notesCont.addEventListener('click', (e)=>{
  if(e.target.tagName === 'IMG'){
    e.target.parentElement.remove()
    saveData();
  } else if(e.target.tagName === 'P'){
    const notes = document.querySelectorAll(".inputBox");
    notes.forEach((note)=>{
      note.onkeyup = function(){
        saveData();
      }
    })
  }
})

function saveData(){
  localStorage.setItem("Notes", notesCont.innerHTML);
}

function showData(){
  notesCont.innerHTML = localStorage.getItem("Notes");
}
showData();