function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    document.getElementById('time').textContent = 
        `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

// Update time every second
setInterval(updateClock, 1000);
updateClock();
