let hole = document.getElementsByClassName('hole');
let killed = document.getElementById('dead');
let wave = document.getElementById('lost');

for (let i = 0; i < hole.length; i++) {
    hole[i].onclick = () => {
        if (hole[i].className.includes('hole_has-mole')) {
            killed.textContent = Number(killed.textContent) + 1;
            if (Number(killed.textContent) === 10) {
                alert('Победа');
                killed.textContent = '0';
                wave.textContent = '0';
            }
        }
        else {
            wave.textContent = Number(wave.textContent) + 1;
            if (Number(wave.textContent) === 5) {
                alert('Проигрыш');
                killed.textContent = '0';
                wave.textContent = '0';
            }
        }
    }
}