let changeColorBtn = document.getElementById('colorChnage');
let divColor = document.getElementById('divColor');

changeColorBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    divColor.style.backgroundColor = 'blue';
})