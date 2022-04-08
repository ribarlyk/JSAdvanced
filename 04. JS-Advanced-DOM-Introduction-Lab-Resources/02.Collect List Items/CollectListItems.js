function extractText() {
let items = document.getElementById('items');
let areaElements = document.getElementById('result');
areaElements.textContent = items.textContent;
}