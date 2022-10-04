const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const trialDiv = document.getElementById('trial');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event){
   trial = event.results[0][0].transcript;
   showTrial(trial);
   validateTrial(trial);
}

function showTrial(trial){
    trialDiv.innerHTML = `
    <div> Você disse: </div>
     <span class="box">${trial}</span>`                           
}

document.body.addEventListener('click', event => {
    if(event.target.id == 'play-again'){
        window.location.reload();
    }
});



recognition.addEventListener('end', () => recognition.start())


