function extract(content) {
let textElement = document.getElementById('content');
let pattern = /\((?<text>\w+\s?\w*\s*\w*)\)/gm
let match = pattern.exec(textElement.textContent);
let elementArr = [];
while (match != null){
elementArr.push(match.groups['text']);

match = pattern.exec(textElement.textContent);
}
textElement.textContent = elementArr
return textElement.textContent = elementArr.join('; ')
}
