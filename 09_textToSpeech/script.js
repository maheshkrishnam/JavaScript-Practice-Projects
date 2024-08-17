const input = document.getElementById("text");
const convert = document.getElementById("convert");
const select = document.getElementById("select");

let speech = new SpeechSynthesisUtterance();
let voices = [];

window.speechSynthesis.onvoiceschanged = ()=>{
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i)=>{
    select.options[i] = new Option(voice.name, i);
  })
}

convert.addEventListener('click', ()=>{
  speech.text = input.value;
  window.speechSynthesis.speak(speech);

})

select.addEventListener('change', ()=>{
  speech.voice = voices[select.value];
})