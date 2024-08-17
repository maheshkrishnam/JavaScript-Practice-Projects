let boxes = Array.from(document.querySelectorAll('.box'));
let reset = document.querySelector('.reset');
let turnMassage = document.querySelector('.turn');
let play = 1;
let turn = 'X';

let nextTurn = ()=>{
  if(turn === 'X'){
    turn = 'O';
    turnMassage.innerText = turn + ' Turn';
  } else{
    turn = 'X';
    turnMassage.innerText = turn + ' Turn';
  }
}

let checkWin = ()=>{
  let win = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];
  win.forEach((e)=>{
    if((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[2]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText !== "")){
      e.forEach((element)=>{
        boxes[element].style.backgroundColor = 'purple';
      })
      play = 0;
      if(turn === 'O'){
        turnMassage.innerText = 'X Won';
      } else{
        turnMassage.innerText = 'O Won';
      }
      document.querySelector('.gif').style.opacity = '1';
    }
  })
}

boxes.forEach((element)=>{
  element.addEventListener('click', ()=>{
    if(play === 0){
      return;
    }
    if(element.innerText === ''){
      element.innerText = turn;
      nextTurn();
    }
    checkWin();
  })
})



// reset.addEventListener('click', ()=>{
//   boxes.forEach((element)=>{
//     element.innerText = '';
//     turn = 'X';
//     turnMassage.innerText = turn + ' Turn';
//     play = 1;
//     document.querySelector('.gif').style.opacity = '0';
//     element.style.backgroundColor = 'rgb(34, 2, 48)';
//   })
// })

reset.addEventListener('click', ()=>{
  location.reload();
})