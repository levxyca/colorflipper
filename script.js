const btn = document.querySelector('.main__btn');
const display = document.querySelector('.main__display');

const color = ["#4682B4", "#008080", "#BC8F8F", "#A020F0", "#FF6347"];

let n;

btn.addEventListener('click', () => {
    n = getRandomInt(0, 5);
    document.body.style.backgroundColor = color[n];
    display.innerHTML = color[n];
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}