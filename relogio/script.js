const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function clockTick() {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes() + seconds / 60;
        const hours = (date.getHours() % 12) + minutes / 60;

        secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
        minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
        hourHand.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`;
    }
    
    setInterval(clockTick, 1000);
    clockTick(); // Inicializa o relógio imediatamente