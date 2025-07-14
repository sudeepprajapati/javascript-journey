const clock = document.getElementById('clock');

setInterval(() => {
    const date = new Date();
    clock.textContent = date.toLocaleTimeString('en-US', {
        hour: '2-digit', //optional
        minute: '2-digit', //optional
        second: '2-digit', //optional
        hour12: true
    });
}, 1000);
