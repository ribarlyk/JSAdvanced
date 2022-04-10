function editElement(element,match,replacer) {
        let element = document.getElementById('e1');
while(element.textContent == match){
    element.textContent = element.textContent.replace(match,replacer);
}
}