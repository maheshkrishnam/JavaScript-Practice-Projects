let score = document.querySelector(".score");
let gameOver = document.querySelector(".gameOver");
let player = document.querySelector(".player");
let enemy = document.querySelector(".enemy");
let reset = document.querySelector(".reset");

let play = true;

document.onkeydown = function(e) {
  if(e.key == 'ArrowUp' && play){
    player.classList.add("playerAni");
  }
  setTimeout(()=>{
    player.classList.remove("playerAni");
  }, 700)
  
  playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue("left"));
  if(e.key == 'ArrowLeft' && playerX > 60 && play){
    player.style.left = `${playerX - 50}px`;
  }
  
  if(e.key == 'ArrowRight' && playerX < 800 && play){
    playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue("left"));
    player.style.left = `${playerX + 50}px`;
  }
}

let increaseSc = 1;

function increase(){
  setTimeout(()=>{
    increaseSc = 1;
  }, 2000)
}

function increaseScore(){
  score.innerText = (eval(`${score.innerText} + 1`));
  increaseSc = 0;
  increase();
}

function decreaseDur(){
  aniDur = parseFloat(window.getComputedStyle(enemy, null).getPropertyValue("animation-duration"));
  if(aniDur > 3){
    setTimeout(()=>{
      newDur = aniDur - 0.1;
      enemy.style.animationDuration = `${newDur}s`;
      console.log(newDur);
    }, 500)
  }
}

setInterval(()=>{
  let pX = parseInt(window.getComputedStyle(player, null).getPropertyValue("left"));
  let eX = parseInt(window.getComputedStyle(enemy, null).getPropertyValue("left"));
  let eY = parseInt(window.getComputedStyle(enemy, null).getPropertyValue("top"));
  let pY = parseInt(window.getComputedStyle(player, null).getPropertyValue("top"));
  
  let offsetX = Math.abs(pX - eX);
  let offsetY = Math.abs(pY - eY);

  if(offsetX < 65 && offsetY < 65){
    play = false;
    enemy.classList.remove("enemyAni");
    player.classList.remove("playerAni");
    document.querySelector('.over').classList.add("GameOver");
    document.querySelector('.GameOver').classList.remove("over");
    document.querySelector('.reset').classList.add("resetGame");
    document.querySelector('.resetGame').classList.remove("rest");
  } else if(offsetY > 65 && offsetY < 200 && ((pX - eX) > 50)&& (increaseSc == 1)){
    decreaseDur();
    increaseScore();
  }
  
}, 50)


reset.addEventListener("click", ()=>{
  play = true;
  enemy.classList.add("enemyAni");
  player.style.left = "30px";
  document.querySelector('.GameOver').classList.add("over");
  document.querySelector('.over').classList.remove("GameOver");
  document.querySelector('.resetGame').classList.add("reset");
  document.querySelector('.reset').classList.remove("resetGame");
  score.innerText = '0';
})