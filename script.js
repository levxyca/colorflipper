const btn = document.querySelector('.main__btn');
const display = document.querySelector('.main__display');

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
    display.innerHTML = getHex;
})

const randomColor = () => {
    getHex = "#" + (Math.random()*0xFFFFFF<<0).toString(16).toUpperCase();
    if(getHex.length == 6){
        randomColor();
    }
    return getHex;
}