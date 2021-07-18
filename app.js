const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
const startbtn = document.querySelector('#start');
const stopbtn = document.querySelector('#stop');
const timers = document.querySelectorAll('#timer');
const status = document.querySelector('#status')

stopbtn.disabled = true;
let score = document.querySelector('#score');

let result = 0;

stopbtn.addEventListener('click', () => {
    location.reload()
})

timers.forEach( timer =>{
    timer.addEventListener('click',() => {
        time = timer.getAttribute('time')
        console.log(time)
        timeLeft.textContent = time;
    })
    
})



startbtn.addEventListener('click', () => {
    let currentTime = timeLeft.textContent;
    let timerId = setInterval(starter,1000)
    startbtn.disabled = true;
    stopbtn.disabled = false;
    timers.forEach( timer =>{
        timer.disabled = true;
    })
    let timetostart = 4;
    function starter(){
        timetostart--
        status.textContent = "Game Starts in "+ timetostart
        
        if (timetostart === 0){
            clearInterval(timerId)
            status.textContent = "Go!"
            main()
        }
    }
    function main(){

    function randomSquare(){
        square.forEach(className =>{
            className.classList.remove('mole');
        })
        let randomPosition = square[Math.floor(Math.random()*9)];
        randomPosition.classList.add('mole');
    
        hitPosition = randomPosition.id;
    }
    
    square.forEach(id => {
        id.addEventListener('mouseup', () => {
            if(id.id === hitPosition){
                result = result + 1
                score.textContent = result
            }
        })
    })
    
    function moveMole(){
        let timerId = null
        timerId = setInterval(randomSquare,1000);
        
    }
    moveMole()
    
    function countDown(){
        currentTime--;
        timeLeft.textContent = currentTime;
        if (currentTime <= 10){
            status.textContent = "Time is running out....."
        }
        if(currentTime === 0){
            clearInterval(timerId);
            status.textContent = "Game Over!"
            alert('Game Over! Your score is '+result);
            location.reload()
        }
    }
    timerId = setInterval(countDown,1000)
}
});


