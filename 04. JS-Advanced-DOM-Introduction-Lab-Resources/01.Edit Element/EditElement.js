function editElement(element,match,replacer) {
while(element.textContent == match){
    element.textContent = element.textContent.replace(match,replacer);
}
}