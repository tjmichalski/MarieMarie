let elements = document.querySelectorAll('form div input, form div textarea');

console.log(elements);


window.addEventListener('keyup', () => {
    for (let i = 0; i < elements.length; i++){
        if (elements[i].value.length > 0) {
            elements[i].style.backgroundColor = '#FFFFFF';
        }
        else {
            elements[i].style.backgroundColor ='#f0efeb';
        }
    }
})
