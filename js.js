function getcomputerchoice(){
    const x = ['rock', 'paper', 'sissors']
    randomElement = x[Math.floor(Math.random() * x.length)];
    return randomElement
}


function playerselection(){
    const x = prompt('rps')
    return x
}

function play(getcomputerchoice, playerselection){
    if (prompt() == "scissors"){
        console.log('wow')
    }
}

console.log(getcomputerchoice())
play()
