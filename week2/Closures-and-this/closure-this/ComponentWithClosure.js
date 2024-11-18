function createTimer(duration, elementId) {
    let timeLeft = duration; 
    
    const intervalId = setInterval(function() {
        document.getElementById(elementId).textContent = `Remaining Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(intervalId); 
            document.getElementById(elementId).textContent = 'Timer finished!';
            console.log('Timer finished!');
        } else {
            timeLeft--; 
        }
    }, 1000); 
}

createTimer(10, 'timerDisplay');
