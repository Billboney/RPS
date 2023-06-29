function getcomputerchoice() {
    var y = ['rock', 'paper', 'scissors']
    var getcomputerchoic = y[Math.floor(Math.random() * y.length)];
    return getcomputerchoic ;
}


i= 0
k= 0


function play(choice){
    console.log('you: '+ i)
        console.log('computer: ' + k)
        let playerselection = choice
        let j = getcomputerchoice()
        if (
            (playerselection == "scissors" && j == "paper") ||
            (playerselection == "rock" && j == "paper") ||
            (playerselection == "paper" && j == "rock")
        ){
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


play()
console.log('done')
