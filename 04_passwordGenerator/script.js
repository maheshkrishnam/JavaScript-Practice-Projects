const input = document.querySelector(".input");
const button = document.querySelector(".button");
const copy = document.querySelector(".copy");


button.addEventListener('click', ()=>{
  const l = Math.random()*15 + 7;
  const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`-=+?{}[]()*&^%$#@!";
  let password = "";
  for(let i=0; i<l; i++){
    let index = Math.floor(Math.random()*s.length);
    password += s.charAt(index);
  }
  console.log("Clicked")
  input.value = password;
})

copy.addEventListener('click', ()=>{
  navigator.clipboard.writeText(input.value)
})