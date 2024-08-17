let play = document.querySelector('.play');
let next = document.querySelector('.next');
let back = document.querySelector('.back');
let progressBar = document.querySelector('.progressBar');
let gif = document.querySelector('.gif');
let songNaming = document.querySelector('.songName');
let playsong = Array.from(document.querySelectorAll('.playsong'));
let songItem = Array.from(document.querySelectorAll('.songTitle'));
let audioElement = new Audio("songs/Nayan.mp3");
let index = 0;

let songs = [
  {songName: 'Kavalaya', filePath: 'songs/kavalaya.mp3', cover: 'song1.jpeg'},
  {songName: 'Nayan', filePath: 'songs/Nayan.mp3', cover: 'song2.jpeg'},
  {songName: 'Vaaste', filePath: 'songs/vaaste.mp3', cover: 'song3.jpeg'}
];

songItem.forEach((element, i)=>{
    element.querySelectorAll('img')[0].src = songs[i].cover;
})

songItem.forEach((element, i)=>{
    element.querySelectorAll('.songname')[0].textContent = songs[i].songName;
})

function makeAllPlay(){
  playsong.forEach((element)=>{
    element.src = 'play.png';
  })
}

play.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime <= 0){
    audioElement.play();
    play.src = 'pause.png';
    gif.style.opacity = 1;
    playsong[index].src = 'pause.png';
  } else{
    audioElement.pause();
    play.src = 'play.png';
    gif.style.opacity = 0;
    makeAllPlay();
  }
})

audioElement.addEventListener('timeupdate', ()=>{
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  progressBar.value = progress;
})

audioElement.addEventListener('timeupdate', ()=>{
  if(audioElement.currentTime === audioElement.duration){
    play.src = 'play.png';
  }
})

progressBar.addEventListener('change', ()=>{
  audioElement.currentTime = ((progressBar.value*audioElement.duration)/100)
})

playsong.forEach((element)=>{
  element.addEventListener('click', (event)=>{
    makeAllPlay();
    index = parseInt(event.target.id);
    audioElement.src = `${songs[index].filePath}`;
    audioElement.play();
    play.src = 'pause.png';
    element.src = 'pause.png';
    songNaming.innerHTML = `${songs[index].songName}`;
  })
})

next.addEventListener('click', ()=>{
  if(index >= songs.length-1){
    index = 0;
  } else{
    index += 1;
  }
  makeAllPlay();
  audioElement.src = `${songs[index].filePath}`;
  audioElement.play();
  play.src = 'pause.png';
  playsong[index].src = 'pause.png';
  songNaming.innerHTML = `${songs[index].songName}`;
})

back.addEventListener('click', ()=>{
  if(index <= 0){
    index = songs.length-1;
  } else{
    index -= 1;
  }
  makeAllPlay();
  audioElement.src = `${songs[index].filePath}`;
  audioElement.play();
  play.src = 'pause.png';
  playsong[index].src = 'pause.png';
  songNaming.innerHTML = `${songs[index].songName}`;
})