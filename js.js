function getcomputerchoice() {
    var y = ['rock', 'paper', 'sissors']
    var getcomputerchoic = y[Math.floor(Math.random() * y.length)];
    return getcomputerchoic ;
}







function play(){
    i = 0
    k = 0
    while (i < 5 && k < 5){
        console.log('you: '+ i)
        console.log('computer: ' + k)
        let p = window.prompt()
        let playerselection = p.toLowerCase()
        let j = getcomputerchoice()
        if (playerselection == "scissors" && j == "paper"){
            console.log('win')
            i ++
        }
        else if (playerselection == "rock" && j == "paper"){
            console.log('win')
            i ++
        }
        else if (playerselection == "paper" && j == "rock"){
            console.log('win')
            i ++
        }
        else if (
            (playerselection == "paper" && j == "scissors") ||
            (playerselection == "rock" && j == "scissors") ||
            (playerselection == "scissors" && j == "rock")
        ){
            console.log('lose')
            k ++
        }
        else if (playerselection == j){
            console.log('draw')
        }
        else {
        }
        
    }
}


play()
console.log('done')
