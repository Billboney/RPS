function getcomputerchoice(){
    const x = ['rock', 'paper', 'sissors']
    randomElement = x[Math.floor(Math.random() * x.length)];
    return randomElement
}

console.log(getcomputerchoice())
