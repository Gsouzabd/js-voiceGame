function validateTrial(trial){
    const numberTrial = +trial;

    if(Number.isNaN(numberTrial)){
        trialDiv.innerHTML += '<div><span style="color: red">Valor Inválido!</span></div>';
    
    }
    if(numberTrial < lowerValue || numberTrial > highestValue){
        trialDiv.innerHTML += `<div><span style="color: red">O valor precisa ser maior que ${lowerValue} e menor que ${highestValue}</span></div>`;
    }
    if(trial == secretNumber){
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O número secreto era ${secretNumber}</h3>
        <button id="play-again" class="btn-pa">Jogar Novamente</button>`
    }else if(trial > secretNumber){
        trialDiv.innerHTML+=`<div>o número secreto é menor<i class="fa-solid fa-down-long"></i></div>`;
    }
    else if(trial < secretNumber){
        trialDiv.innerHTML+=`<div>o número secreto é maior<i class="fa-solid fa-arrow-up"></i></div>`;
    }

    
    
}