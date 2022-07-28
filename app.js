const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const select = document.querySelector('select');
const h1 = document.querySelector('h1');
btn1.addEventListener('click', function () {
    p1.innerText++;
    if (p1.innerText === select.value) {
        p1.style.color = 'green';
        p1.style.transition = 'color 0.8s';
        p2.style.color = 'red';
        p1.style.transition = 'color 0.8s';
        btn1.setAttribute('disabled', '');
        btn2.setAttribute('disabled', '');
        h1.innerText = 'Player 1 Wins!';
    }
});
btn2.addEventListener('click', function () {
    p2.innerText++;
    if (p2.innerText === select.value) {
        p1.style.color = 'red';
        p1.style.transition = 'color 0.8s';
        p2.style.color = 'green';
        p1.style.transition = 'color 0.8s';
        btn1.setAttribute('disabled', '');
        btn2.setAttribute('disabled', '');
        h1.innerText = 'Player 2 Wins!';
    }
});
btn3.addEventListener('click', function () {
    p1.innerText = 0;
    p2.innerText = 0;
    btn1.removeAttribute('disabled');
    btn2.removeAttribute('disabled');
    p1.style.color = 'black';
    p2.style.color = 'black';
    h1.innerText = '';
});