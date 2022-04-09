function colorize() {
 let toBePaintedElements = document.querySelectorAll('tr:nth-of-type(2n) td');
toBePaintedElements.forEach(el =>{
    el.style.backgroundColor = 'teal';
})
}