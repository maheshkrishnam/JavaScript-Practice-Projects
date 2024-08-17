let isFriend = false;
let friend = document.querySelector('.change');
let addButton = document.querySelector('.button');

document.querySelector('.button').addEventListener('click', function(){
  if(!isFriend){
    friend.innerHTML = 'Friend';
    friend.style.color = 'blue';
    addButton.innerHTML = 'Remove';
    addButton.style.backgroundColor = 'grey';
    addButton.style.color = 'black';
    isFriend = true;
  } else{
    friend.innerHTML = 'Stranger';
    friend.style.color = 'red';
    addButton.innerHTML = 'Add Friend';
    addButton.style.backgroundColor = 'rgb(229, 176, 255)';
    addButton.style.color = 'rgb(69, 51, 78)';
    isFriend = false;
  }
})