function cookieClicker() {
    const cookie = document.getElementById('cookie');
    const clicker__counter = document.getElementById('clicker__counter');
    let clickerCounter = 0;
    cookie.onclick = ClickerCounter;

    function ClickerCounter() {
        if (cookie.className === 'clicker__cookie') {
            cookie.className = 'clicker__cookie big';
        } else {
            cookie.className = 'clicker__cookie';
        }
        clickerCounter += 1;
        clicker__counter.textContent = clickerCounter;
    };
}

cookieClicker();
