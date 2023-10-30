let textBx = document.querySelector('.textBx');
let counter = document.querySelector('.counter');
maxlength = textBx.getAttribute("maxlength");
textBx.onkeyup = () => {
    counter.innerText = maxlength - textBx.value.length;
}